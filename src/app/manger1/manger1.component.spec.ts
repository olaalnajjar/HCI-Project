import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manger1Component } from './manger1.component';

describe('Manger1Component', () => {
  let component: Manger1Component;
  let fixture: ComponentFixture<Manger1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Manger1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manger1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
