import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPairingComponent } from './food-pairing.component';

describe('FoodPairingComponent', () => {
  let component: FoodPairingComponent;
  let fixture: ComponentFixture<FoodPairingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPairingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
