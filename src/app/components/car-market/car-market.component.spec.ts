import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMarketComponent } from './car-market.component';

describe('CarMarketComponent', () => {
  let component: CarMarketComponent;
  let fixture: ComponentFixture<CarMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
