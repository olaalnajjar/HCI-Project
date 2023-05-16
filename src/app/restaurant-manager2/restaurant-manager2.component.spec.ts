import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantManager2Component } from './restaurant-manager2.component';

describe('RestaurantManager2Component', () => {
  let component: RestaurantManager2Component;
  let fixture: ComponentFixture<RestaurantManager2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantManager2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantManager2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
