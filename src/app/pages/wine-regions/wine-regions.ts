import { Component } from '@angular/core';
import { WINE_REGION_GROUPS } from '../../data/wine-regions.data';

@Component({
  selector: 'app-wine-regions',
  imports: [],
  templateUrl: './wine-regions.html',
  styleUrl: './wine-regions.css'
})
export class WineRegions {
  wineRegionGroups = WINE_REGION_GROUPS;
}