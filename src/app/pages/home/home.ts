import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface WineMapRegion {
  svgIds: string[];
  routeId: string;
  name: string;
}

interface WineMapGroup {
  id: string;
  name: string;
  routeIds: string[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {
  @ViewChild('wineMapObject') wineMapObject?: ElementRef<HTMLObjectElement>;

  hoveredRegionName = '';

  selectedGroupId = '';

  wineMapGroups: WineMapGroup[] = [
    {
      id: 'balatoni',
      name: 'Balatoni borrégió',
      routeIds: [
        'badacsony',
        'balatonboglar',
        'balaton-felvidek',
        'balatonfured-csopak',
        'somlo',
        'zala'
      ]
    },
    {
      id: 'duna',
      name: 'Duna borrégió',
      routeIds: ['csongrad', 'hajos-baja', 'kunsag']
    },
    {
      id: 'felso-magyarorszag',
      name: 'Felső-Magyarország borrégió',
      routeIds: ['bukk', 'eger', 'matra']
    },
    {
      id: 'felso-pannon',
      name: 'Felső-Pannon borrégió',
      routeIds: ['etyek-buda', 'mor', 'neszmely', 'pannonhalma', 'sopron']
    },
    {
      id: 'pannon',
      name: 'Pannon borrégió',
      routeIds: ['pecs', 'szekszard', 'tolna', 'villany']
    },
    {
      id: 'tokaji',
      name: 'Tokaji borrégió',
      routeIds: ['tokaj']
    }
  ];

  selectGroup(groupId: string): void {
    this.selectedGroupId = groupId;
    this.updateSelectedGroupOnMap();
  }

  private updateSelectedGroupOnMap(): void {
    const objectElement = this.wineMapObject?.nativeElement;
    const svgDocument = objectElement?.contentDocument;

    if (!svgDocument) {
      return;
    }

    const wineRegionsLayer = svgDocument.getElementById('wine-regions');

    if (!wineRegionsLayer) {
      return;
    }

    const allInteractiveRegions = wineRegionsLayer.querySelectorAll('.interactive-wine-region');

    allInteractiveRegions.forEach(element => {
      element.classList.remove('selected-group-region');
      element.classList.remove('dimmed-region');
    });

    if (!this.selectedGroupId) {
      return;
    }

    const selectedGroup = this.wineMapGroups.find(group => group.id === this.selectedGroupId);

    if (!selectedGroup) {
      return;
    }

    this.wineMapRegions.forEach(region => {
      const elements = region.svgIds
        .map(id => wineRegionsLayer.querySelector(`#${CSS.escape(id)}`))
        .filter((element): element is HTMLElement => element !== null);

      const isInSelectedGroup = selectedGroup.routeIds.includes(region.routeId);

      elements.forEach(element => {
        if (isInSelectedGroup) {
          element.classList.add('selected-group-region');
        } else {
          element.classList.add('dimmed-region');
        }
      });
    });
  }

  private wineMapRegions: WineMapRegion[] = [
    { 
      svgIds: ['somlo', 'somlo-1', 'somlo-2', 'somlo-3'],
      routeId: 'somlo',
      name: 'Nagy-Somlói borvidék'
    },
    { 
      svgIds: ['balatonfured-csopak'],
      routeId: 'balatonfured-csopak',
      name: 'Balatonfüred-Csopaki borvidék'
    },
    {
      svgIds: ['badacsony'],
      routeId: 'badacsony',
      name: 'Badacsonyi borvidék'
    },
    {
      svgIds: ['balaton-felvidek', 'balaton-felvidek-1', 'balaton-felvidek-2'],
      routeId: 'balaton-felvidek',
      name: 'Balaton-felvidéki borvidék'
    },
    {
      svgIds: ['zala', 'zala-1', 'zala-2', 'zala-3', 'zala-4', 'zala-5', 'zala-6'],
      routeId: 'zala',
      name: 'Zalai borvidék'
    },
    {
      svgIds: ['balatonboglar', 'balatonboglar-1', 'balatonboglar-2', 'balatonboglar-3', 'balatonboglar-4'],
      routeId: 'balatonboglar',
      name: 'Balatonboglári borvidék'
    },
    {
      svgIds: ['kunsag', 'kunsag-1', 'kunsag-2', 'kunsag-3', 'kunsag-4', 'kunsag-5', 'kunsag-6', 'kunsag-7', 'kunsag-8', 'kunsag-9', 'kunsag-10', 'kunsag-11'],
      routeId: 'kunsag',
      name: 'Kunsági borvidék'
    },
    {
      svgIds: ['csongrad', 'csongrad-1', 'csongrad-2'],
      routeId: 'csongrad',
      name: 'Csongrádi borvidék'
    },
    {
      svgIds: ['hajos-baja'],
      routeId: 'hajos-baja',
      name: 'Hajós-Bajai borvidék'
    },

    {
      svgIds: ['bukk', 'bukk-1', 'bukk-2'],
      routeId: 'bukk',
      name: 'Bükki borvidék'
    },
    {
      svgIds: ['eger'],
      routeId: 'eger',
      name: 'Egri borvidék'
    },
    {
      svgIds: ['matra'],
      routeId: 'matra',
      name: 'Mátrai borvidék'
    },

    {
      svgIds: ['etyek-buda', 'etyek-buda-1', 'etyek-buda-2', 'etyek-buda-3', 'etyek-buda-4'],
      routeId: 'etyek-buda',
      name: 'Etyek-Budai borvidék'
    },
    {
      svgIds: ['mor'],
      routeId: 'mor',
      name: 'Móri borvidék'
    },
    { svgIds: ['neszmely', 'neszmely-1', 'neszmely-2'],
      routeId: 'neszmely',
      name: 'Neszmélyi borvidék'
    },
    { svgIds: ['pannonhalma'],
      routeId: 'pannonhalma',
      name: 'Pannonhalmi borvidék'
    },
    {
      svgIds: ['sopron', 'sopron-1', 'sopron-2', 'sopron-3', 'sopron-4'],
      routeId: 'sopron',
      name: 'Soproni borvidék'
    },
    { svgIds: ['villany'],
      routeId: 'villany',
      name: 'Villányi borvidék'
    },
    { svgIds: ['pecs', 'pecs-1', 'pecs-2', 'pecs-3', 'pecs-4', 'pecs-5'],
      routeId: 'pecs',
      name: 'Pécsi borvidék'
    },
    { svgIds: ['szekszard'],
      routeId: 'szekszard',
      name: 'Szekszárdi borvidék'
    },
    { svgIds: ['tolna', 'tolna-1', 'tolna-2', 'tolna-3', 'tolna-4'],
      routeId: 'tolna',
      name: 'Tolnai borvidék'
    },
    {
      svgIds: ['tokaj'],
      routeId: 'tokaj',
      name: 'Tokaji borvidék'
    }
  ];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const objectElement = this.wineMapObject?.nativeElement;

    if (!objectElement) {
      return;
    }

    objectElement.addEventListener('load', () => {
      this.setupInteractiveMap(objectElement);
    });
  }

  private setupInteractiveMap(objectElement: HTMLObjectElement): void {
    const svgDocument = objectElement.contentDocument;

    if (!svgDocument) {
      return;
    }

    const wineRegionsLayer = svgDocument.getElementById('wine-regions');

    if (!wineRegionsLayer) {
      return;
    }

    this.wineMapRegions.forEach(region => {
      const elements = region.svgIds
        .map(id => wineRegionsLayer.querySelector(`#${CSS.escape(id)}`))
        .filter((element): element is HTMLElement => element !== null);

      elements.forEach(element => {
        element.classList.add('interactive-wine-region');

        element.addEventListener('mouseenter', () => {
          this.hoveredRegionName = region.name;
          this.setRegionActive(elements, true);
        });

        element.addEventListener('mouseleave', () => {
          this.hoveredRegionName = '';
          this.setRegionActive(elements, false);
        });

        element.addEventListener('click', () => {
          this.goToRegion(region.routeId);
        });
      });
    });
    this.updateSelectedGroupOnMap();
  }

  private setRegionActive(elements: HTMLElement[], isActive: boolean): void {
    elements.forEach(element => {
      element.classList.toggle('active-wine-region', isActive);
    });
  }

  goToRegion(regionId: string): void {
    this.router.navigate(['/borvidekek'], { fragment: regionId });
  }
}