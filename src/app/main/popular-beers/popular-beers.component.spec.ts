import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PopularBeersComponent } from './popular-beers.component';
import { BeersService } from './../../shared/beers.service';

import beerMock from './../../shared/beer-mock.json';

describe('PopularBeersComponent', () => {
  let component: PopularBeersComponent;
  let fixture: ComponentFixture<PopularBeersComponent>;
  let element;
  const mockType = 'Weisse';
  const mockData = beerMock;
  const mockBeersService = jasmine.createSpyObj('BeersService', ['fetchBeerByType']);
  const fetchBeerByTypeSpy = mockBeersService.fetchBeerByType.and.returnValue(of(mockData));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularBeersComponent ],
      providers: [
        { provide: BeersService, useValue: mockBeersService }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PopularBeersComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      fixture.detectChanges();
    });
  }));

  it('should create popular beers component', () => {
    expect(component).toBeTruthy();
  });

  it('should make a call to BeersService.fetchBeerByType()', () => {
    expect(fetchBeerByTypeSpy.calls.any()).toBe(true, 'fetchBeerByType called');
  });

  it('should have false isFetching when fetchBeerByType() is called', () => {
    component.isFetching = true;
    component.onFetchBeers(mockType);
    expect(component.isFetching).toBe(false);
  });

  it('should have heading', () => {
    expect(element.querySelector('h2').textContent).toBe('Popular Beers');
  });

  it('should have filter buttons', () => {
    expect(element.querySelector('button#IPA-popular-beer-button').textContent).toBe(' IPA ');
    expect(element.querySelector('button#Lager-popular-beer-button').textContent).toBe(' Lager ');
    expect(element.querySelector('button#Stout-popular-beer-button').textContent).toBe(' Stout ');
    expect(element.querySelector('button#Pale-Ale-popular-beer-button').textContent).toBe(' Pale Ale ');
    expect(element.querySelector('button#Porter-popular-beer-button').textContent).toBe(' Porter ');
    expect(element.querySelector('button#Weisse-popular-beer-button').textContent).toBe(' Weisse ');
  });

  it('should have active class on the first position button when the component is mounted', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(element.querySelector('button.button__selection--active').textContent).toBe(' IPA ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Lager ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Stout ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Pale Ale ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Porter ');
    expect(element.querySelector('button.button__selection--active').textContent).not.toBe(' Weisse ');
  });
});
