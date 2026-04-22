import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wines } from './wines';

describe('Wines', () => {
  let component: Wines;
  let fixture: ComponentFixture<Wines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wines);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
