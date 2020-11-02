import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { FoodPairingComponent } from './food-pairing.component';
import { BeersService } from './../../shared/beers.service';

import beerMock from './../../shared/beer-mock.json';

describe('FoodPairingComponent', () => {
  let component: FoodPairingComponent;
  let fixture: ComponentFixture<FoodPairingComponent>;
  let element;
  const mockFood = 'pasta';
  const mockData = beerMock;
  const mockBeersService = jasmine.createSpyObj('BeersService', ['searchBeers']);
  const searchBeersSpy = mockBeersService.searchBeers.and.returnValue(of(mockData));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPairingComponent ],
      providers: [
        { provide: BeersService, useValue: mockBeersService }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(FoodPairingComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      fixture.detectChanges();
    });
  }));

  it('should create food pairing component', () => {
    expect(component).toBeTruthy();
  });

  it('should make a call to BeersService.searchBeers()', () => {
    expect(searchBeersSpy.calls.any()).toBe(true, 'searchBeers called');
  });

  it('should have false isFetching when searchBeers() is called', () => {
    component.isFetching = true;
    component.searchBeers(mockFood);
    expect(component.isFetching).toBe(false);
  });

  it('should have heading', () => {
    expect(element.querySelector('h2').textContent).toBe('Food Pairing');
  });

  it('should have filter buttons', () => {
    expect(element.querySelector('button#Salad-food-pairing-button').textContent).toBe(' Salad ');
    expect(element.querySelector('button#Beef-food-pairing-button').textContent).toBe(' Beef ');
    expect(element.querySelector('button#Chicken-food-pairing-button').textContent).toBe(' Chicken ');
    expect(element.querySelector('button#Fish-food-pairing-button').textContent).toBe(' Fish ');
    expect(element.querySelector('button#Pasta-food-pairing-button').textContent).toBe(' Pasta ');
    expect(element.querySelector('button#Burger-food-pairing-button').textContent).toBe(' Burger ');
  });

  it('should have active class on the first position button when the component is mounted', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(element.querySelector('button.button__selection--active').textContent).toBe(' Salad ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Beef ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Chicken ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Fish ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Pasta ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Burger ');
  });
});
