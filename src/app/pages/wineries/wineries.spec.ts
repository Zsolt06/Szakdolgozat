import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wineries } from './wineries';

describe('Wineries', () => {
  let component: Wineries;
  let fixture: ComponentFixture<Wineries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wineries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wineries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
