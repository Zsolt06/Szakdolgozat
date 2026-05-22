import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine';
import { UserWineService } from '../../services/user-wine';
import { AuthService } from '../../services/auth';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-wines',
  imports: [FormsModule],
  templateUrl: './wines.html',
  styleUrl: './wines.css',
})
export class Wines implements OnInit {
  currentUser: User | null = null;

  favoriteWineIds: string[] = [];
  ratings: Record<string, number> = {};

  averageRatings: Record<string, { average: number; count: number }> = {};

  wines: Wine[] = [];

  filters = {
    wineRegion: '',
    wineDistrict: '',
    winery: '',
    vintage: '',
    grapeVariety: '',
    color: '',
    minPrice: '',
    maxPrice: ''
  };

  sortBy = 'rating-desc';

  isWinePopupOpen = false;
  isSavingWine = false;
  editingWineId = '';
  selectedImageFile: File | null = null;

  wineForm = {
    name: '',
    price: 0,
    vintage: new Date().getFullYear(),
    winery: '',
    grapeVarietiesText: '',
    wineRegion: '',
    wineDistrict: '',
    color: 'Fehér' as 'Vörös' | 'Fehér' | 'Rozé',
    imageUrl: ''
  };

  constructor(
    private wineService: WineService,
    private userWineService: UserWineService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadWines();
    this.loadAverageRatings();

    this.authService.user$.subscribe(user => {
      this.currentUser = user;

      if (!user) {
        this.favoriteWineIds = [];
        this.ratings = {};
        return;
      }

      this.loadUserWineData(user.uid);
    });
  }

  openCreateWinePopup(): void {
    this.resetWineForm();
    this.isWinePopupOpen = true;
  }

  closeWinePopup(): void {
    this.isWinePopupOpen = false;
    this.resetWineForm();
  }

  async loadUserWineData(userId: string): Promise<void> {
    this.favoriteWineIds = await this.userWineService.getFavoriteIds(userId);
    this.ratings = await this.userWineService.getRatingsMap(userId);

    this.cdr.detectChanges();
  }

  async loadWines(): Promise<void> {
    this.wines = await this.wineService.getWines();
    this.cdr.detectChanges();
  }

  isFavorite(wineId: string): boolean {
    return this.favoriteWineIds.includes(wineId);
  }

  async toggleFavorite(wineId: string): Promise<void> {
    if (!this.currentUser) {
      alert('Kedvencekhez adáshoz először jelentkezz be.');
      return;
    }

    const wasFavorite = this.isFavorite(wineId);

    if (wasFavorite) {
      this.favoriteWineIds = this.favoriteWineIds.filter(id => id !== wineId);
    } else {
      this.favoriteWineIds = [...this.favoriteWineIds, wineId];
    }

    this.cdr.detectChanges();

    try {
      await this.userWineService.toggleFavorite(this.currentUser.uid, wineId);
    } catch {
      if (wasFavorite) {
        this.favoriteWineIds = [...this.favoriteWineIds, wineId];
      } else {
        this.favoriteWineIds = this.favoriteWineIds.filter(id => id !== wineId);
      }

      this.cdr.detectChanges();
      alert('Hiba történt a kedvencek módosítása közben.');
    }
  }

  getRating(wineId: string): number {
    return this.ratings[wineId] ?? 0;
  }

  async setRating(wineId: string, rating: number): Promise<void> {
    if (!this.currentUser) {
      alert('Értékeléshez először jelentkezz be.');
      return;
    }

    const currentRating = this.getRating(wineId);

    if (currentRating === rating) {
      await this.userWineService.removeRating(this.currentUser.uid, wineId);

      const updatedRatings = { ...this.ratings };
      delete updatedRatings[wineId];
      this.ratings = updatedRatings;

      await this.loadAverageRatings();
      this.cdr.detectChanges();
      return;
    }

    this.ratings = {
      ...this.ratings,
      [wineId]: rating
    };

    await this.userWineService.setRating(this.currentUser.uid, wineId, rating);

    await this.loadAverageRatings();
    this.cdr.detectChanges();
  }

  async loadAverageRatings(): Promise<void> {
    this.averageRatings = await this.userWineService.getAverageRatings();
    this.cdr.detectChanges();
  }

  getAverageRating(wineId: string): number {
    return this.averageRatings[wineId]?.average ?? 0;
  }

  getAverageRatingCount(wineId: string): number {
    return this.averageRatings[wineId]?.count ?? 0;
  }

  getAverageRatingText(wineId: string): string {
    const average = this.getAverageRating(wineId);

    if (average === 0) {
      return 'Nincs értékelés';
    }

    return average.toFixed(2);
  }

  get filteredWines(): Wine[] {
    const filtered = this.wines.filter(wine => {
      return (
        (!this.filters.wineRegion || wine.wineRegion === this.filters.wineRegion) &&
        (!this.filters.wineDistrict || wine.wineDistrict === this.filters.wineDistrict) &&
        (!this.filters.winery || wine.winery === this.filters.winery) &&
        (!this.filters.vintage || wine.vintage === Number(this.filters.vintage)) &&
        (!this.filters.grapeVariety || wine.grapeVarieties.includes(this.filters.grapeVariety)) &&
        (!this.filters.color || wine.color === this.filters.color) &&
        (!this.filters.minPrice || wine.price >= Number(this.filters.minPrice)) &&
        (!this.filters.maxPrice || wine.price <= Number(this.filters.maxPrice))
      );
    });

    return filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'rating-desc':
          return this.getAverageRating(b.id) - this.getAverageRating(a.id);
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'vintage-asc':
          return a.vintage - b.vintage;
        case 'vintage-desc':
          return b.vintage - a.vintage;
        case 'price-asc':
        default:
          return a.price - b.price;
      }
    });
  }

  get wineRegions(): string[] {
    return [...new Set(this.wines.map(wine => wine.wineRegion))].sort((a, b) => a.localeCompare(b, 'hu'));;
  }

  get wineDistricts(): string[] {
    return [...new Set(this.wines.map(wine => wine.wineDistrict))].sort((a, b) => a.localeCompare(b, 'hu'));
  }

  get wineries(): string[] {
    return [...new Set(this.wines.map(wine => wine.winery))].sort((a, b) => a.localeCompare(b, 'hu'));
  }

  get vintages(): number[] {
    return [...new Set(this.wines.map(wine => wine.vintage))].sort((a, b) => b - a);
  }

  get grapeVarieties(): string[] {
    return [...new Set(this.wines.flatMap(wine => wine.grapeVarieties))].sort((a, b) => a.localeCompare(b, 'hu'));
  }

  clearFilters(): void {
    this.filters = {
      wineRegion: '',
      wineDistrict: '',
      winery: '',
      vintage: '',
      grapeVariety: '',
      color: '',
      minPrice: '',
      maxPrice: ''
    };

    this.sortBy = 'rating-desc';
  }

  onWineImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Csak képfájl tölthető fel.');
      input.value = '';
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      alert('A kép mérete maximum 3 MB lehet.');
      input.value = '';
      return;
    }

    this.selectedImageFile = file;
  }

  async saveWine(): Promise<void> {
    if (!this.currentUser) {
      alert('Bor mentéséhez először jelentkezz be.');
      return;
    }

    if (!this.wineForm.name.trim()) {
      alert('A bor neve kötelező.');
      return;
    }

    this.isSavingWine = true;

    try {
      const wineId = this.editingWineId || this.createSlug(this.wineForm.name);

      let imageUrl = this.wineForm.imageUrl;

      if (this.selectedImageFile) {
        imageUrl = await this.wineService.uploadWineImage(
          this.selectedImageFile,
          wineId
        );
      }

      const wine: Wine = {
        id: wineId,
        name: this.wineForm.name.trim(),
        price: Number(this.wineForm.price),
        vintage: Number(this.wineForm.vintage),
        winery: this.wineForm.winery.trim(),
        grapeVarieties: this.wineForm.grapeVarietiesText
          .split(',')
          .map(item => item.trim())
          .filter(item => item.length > 0),
        wineRegion: this.wineForm.wineRegion.trim(),
        wineDistrict: this.wineForm.wineDistrict.trim(),
        color: this.wineForm.color,
        imageUrl,
        createdBy: this.currentUser.uid
      };

      await this.wineService.addOrUpdateWine(wine);

      await this.loadWines();

      this.resetWineForm();

      alert('Bor sikeresen mentve.');
      this.isWinePopupOpen = false;
    } catch (error) {
      console.error('Bor mentési hiba:', error);
      alert('Hiba történt a bor mentése közben.');
    } finally {
      this.isSavingWine = false;
      this.cdr.detectChanges();
    }
  }

  editWine(wine: Wine): void {
    this.editingWineId = wine.id;
    this.selectedImageFile = null;

    this.wineForm = {
      name: wine.name,
      price: wine.price,
      vintage: wine.vintage,
      winery: wine.winery,
      grapeVarietiesText: wine.grapeVarieties.join(', '),
      wineRegion: wine.wineRegion,
      wineDistrict: wine.wineDistrict,
      color: wine.color,
      imageUrl: wine.imageUrl
    };
    this.isWinePopupOpen = true;
  }

  async deleteWine(wine: Wine): Promise<void> {
    if (!this.currentUser) {
      alert('Törléshez először jelentkezz be.');
      return;
    }

    const confirmed = confirm(`Biztosan törlöd ezt a bort? ${wine.name}`);

    if (!confirmed) {
      return;
    }

    try {
      await this.wineService.deleteWine(wine.id);

      try {
        if (wine.imageUrl) {
          await this.wineService.deleteWineImage(wine.imageUrl);
        }
      } catch (imageError) {
        console.warn('A kép törlése nem sikerült, de a bor törölve lett:', imageError);
      }

      await this.loadWines();

      alert('Bor törölve.');
    } catch (error) {
      console.error('Bor törlési hiba:', error);
      alert('Hiba történt a törlés közben.');
    }
  }

  resetWineForm(): void {
    this.editingWineId = '';
    this.selectedImageFile = null;

    this.wineForm = {
      name: '',
      price: 0,
      vintage: new Date().getFullYear(),
      winery: '',
      grapeVarietiesText: '',
      wineRegion: '',
      wineDistrict: '',
      color: 'Fehér',
      imageUrl: ''
    };
  }

  private createSlug(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
}
