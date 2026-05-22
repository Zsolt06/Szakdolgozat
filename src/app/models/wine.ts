export type WineColor = 'Vörös' | 'Fehér' | 'Rozé';

export interface Wine {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  vintage: number;
  winery: string;
  grapeVarieties: string[];
  wineRegion: string;
  wineDistrict: string;
  color: WineColor;
  createdBy?: string;
}