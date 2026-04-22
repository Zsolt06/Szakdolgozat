import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineRegions } from './wine-regions';

describe('WineRegions', () => {
  let component: WineRegions;
  let fixture: ComponentFixture<WineRegions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineRegions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineRegions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
