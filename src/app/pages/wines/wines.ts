import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type WineColor = 'Vörös' | 'Fehér' | 'Rozé'

interface Wine {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  vintage: number;
  winery: string;
  grapeVariety: string;
  wineRegion: string;
  wineDistrict: string;
  color: WineColor;
}
@Component({
  selector: 'app-wines',
  imports: [FormsModule],
  templateUrl: './wines.html',
  styleUrl: './wines.css',
})
export class Wines {
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

  sortBy = 'price-asc';

  wines: Wine[] = [
    {
      id: 'tokaji-aszu',
      imageUrl: '/images/wines/tokaji-aszu.png',
      name: 'Tokaji Aszú 5 puttonyos',
      price: 12990,
      vintage: 2017,
      winery: 'Disznókő',
      grapeVariety: 'Furmint',
      wineRegion: 'Tokaji borrégió',
      wineDistrict: 'Tokaji borvidék',
      color: 'Fehér'
    },
    {
      id: 'egri-bikaver',
      imageUrl: '/images/wines/egri-bikaver.png',
      name: 'Egri Bikavér Superior',
      price: 5490,
      vintage: 2020,
      winery: 'St. Andrea',
      grapeVariety: 'Kékfrankos',
      wineRegion: 'Felső-Magyarország borrégió',
      wineDistrict: 'Egri borvidék',
      color: 'Vörös'
    },
    {
      id: 'villanyi-franc',
      imageUrl: '/images/wines/villanyi-franc.png',
      name: 'Villányi Franc',
      price: 8990,
      vintage: 2019,
      winery: 'Gere Attila Pincészete',
      grapeVariety: 'Cabernet Franc',
      wineRegion: 'Pannon borrégió',
      wineDistrict: 'Villányi borvidék',
      color: 'Vörös'
    },
    {
      id: 'badacsonyi-keknyelu',
      imageUrl: '/images/wines/keknyelu.png',
      name: 'Badacsonyi Kéknyelű',
      price: 4790,
      vintage: 2022,
      winery: 'Laposa Birtok',
      grapeVariety: 'Kéknyelű',
      wineRegion: 'Balatoni borrégió',
      wineDistrict: 'Badacsonyi borvidék',
      color: 'Fehér'
    }
  ];

  get filteredWines(): Wine[] {
    const filtered = this.wines.filter(wine => {
      return (
        (!this.filters.wineRegion || wine.wineRegion === this.filters.wineRegion) &&
        (!this.filters.wineDistrict || wine.wineDistrict === this.filters.wineDistrict) &&
        (!this.filters.winery || wine.winery === this.filters.winery) &&
        (!this.filters.vintage || wine.vintage === Number(this.filters.vintage)) &&
        (!this.filters.grapeVariety || wine.grapeVariety === this.filters.grapeVariety) &&
        (!this.filters.color || wine.color === this.filters.color) &&
        (!this.filters.minPrice || wine.price >= Number(this.filters.minPrice)) &&
        (!this.filters.maxPrice || wine.price <= Number(this.filters.maxPrice))
      );
    });

    return filtered.sort((a, b) => {
      switch (this.sortBy) {
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
    return [...new Set(this.wines.map(wine => wine.wineRegion))];
  }

  get wineDistricts(): string[] {
    return [...new Set(this.wines.map(wine => wine.wineDistrict))];
  }

  get wineries(): string[] {
    return [...new Set(this.wines.map(wine => wine.winery))];
  }

  get vintages(): number[] {
    return [...new Set(this.wines.map(wine => wine.vintage))].sort((a, b) => b - a);
  }

  get grapeVarieties(): string[] {
    return [...new Set(this.wines.map(wine => wine.grapeVariety))];
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

    this.sortBy = 'price-asc';
  }
}
