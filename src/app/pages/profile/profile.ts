import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../services/auth';
import { WineService } from '../../services/wine';
import { UserWineService } from '../../services/user-wine';
import { Wine } from '../../models/wine';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  user$;

  currentUser: User | null = null;

  wines: Wine[] = [];
  favoriteWineIds: string[] = [];
  ratings: Record<string, number> = {};

  constructor(
    private authService: AuthService,
    private wineService: WineService,
    private userWineService: UserWineService,
    private cdr: ChangeDetectorRef
  ) {
    this.user$ = this.authService.user$;
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;

      if (!user) {
        return;
      }

      this.loadProfileData(user.uid);
    });
  }

  async loadProfileData(userId: string): Promise<void> {
    this.wines = await this.wineService.getWines();
    this.favoriteWineIds = await this.userWineService.getFavoriteIds(userId);
    this.ratings = await this.userWineService.getRatingsMap(userId);

    console.log('Profil borok:', this.wines);
    console.log('Profil kedvencek:', this.favoriteWineIds);
    console.log('Profil értékelések:', this.ratings);

    this.cdr.detectChanges();
  }

  async loadWines(): Promise<void> {
    this.wines = await this.wineService.getWines();
    this.cdr.detectChanges();
  }

  get favoriteWines(): Wine[] {
    return this.wines.filter(wine => this.favoriteWineIds.includes(wine.id));
  }

  get ratedWines(): Wine[] {
    return this.wines
      .filter(wine => this.ratings[wine.id])
      .sort((a, b) => this.ratings[b.id] - this.ratings[a.id]);
  }

  getRating(wineId: string): number {
    return this.ratings[wineId] ?? 0;
  }

  async setRating(wineId: string, rating: number): Promise<void> {
    if (!this.currentUser) {
      return;
    }

    await this.userWineService.setRating(
      this.currentUser.uid,
      wineId,
      rating
    );

    this.ratings = {
      ...this.ratings,
      [wineId]: rating
    };

    this.cdr.detectChanges();
  }

  async removeFavorite(wineId: string): Promise<void> {
    if (!this.currentUser) {
      return;
    }

    await this.userWineService.removeFavorite(this.currentUser.uid, wineId);

    this.favoriteWineIds = this.favoriteWineIds.filter(id => id !== wineId);
    this.cdr.detectChanges();
  }

  async removeRating(wineId: string): Promise<void> {
    if (!this.currentUser) {
      return;
    }

    await this.userWineService.removeRating(this.currentUser.uid, wineId);

    const updatedRatings = { ...this.ratings };
    delete updatedRatings[wineId];
    this.ratings = updatedRatings;

    this.cdr.detectChanges();
  }
}