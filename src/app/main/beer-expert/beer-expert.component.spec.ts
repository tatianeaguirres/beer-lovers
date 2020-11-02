import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

import { BeerExpertComponent } from './beer-expert.component';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';
import { BeersService } from './../../shared/beers.service';

import beerMock from './../../shared/beer-mock.json';

describe('BeerExpertComponent', () => {
  let component: BeerExpertComponent;
  let fixture: ComponentFixture<BeerExpertComponent>;
  let element;
  let location: Location;
  let router: Router;
  const mockId = '192';
  const mockData = beerMock;
  const mockBeersService = jasmine.createSpyObj('BeersService', ['getRandomBeer']);
  const getRandomBeerSpy = mockBeersService.getRandomBeer.and.returnValue(of(mockData));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerExpertComponent ],
      providers: [
        { provide: BeersService, useValue: mockBeersService }
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'beer/' + mockId, component: BeerDetailsComponent}]
        )
      ]
    })
    .compileComponents()
    .then(() => {
      router = TestBed.inject(Router);
      location = TestBed.inject(Location);
      router.initialNavigation();
      fixture = TestBed.createComponent(BeerExpertComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      fixture.detectChanges();
    });
  }));

  it('should create beer expert component', () => {
    expect(component).toBeTruthy();
  });

  it('should make a call to BeersService.getRandomBeer()', () => {
    expect(getRandomBeerSpy.calls.any()).toBe(true, 'getRandomBeer called');
  });

  it('should have image', () => {
    expect(element.querySelector('img[src="/assets/homer.png"]').alt).toContain('Our beer expert, Homer Simpson, smiling and holding a beer mug.');
  });

  it('should have heading', () => {
    expect(element.querySelector('h2').textContent).toBe('Discover your beer!');
  });

  it('should have paragraph', () => {
    expect(element.querySelector('p').textContent).toBe('Our beer expert will choose a beer for you. Are you ready?');
  });

  it('should have link', () => {
    expect(element.querySelector('a.button__primary').ariaLabel).toBe('Go to the beer details that Homer chose for you.');
  });

  it('should navigate to /beer/:id', async(() => {
    router.navigate(['/beer/' + mockId]).then(() => {
      expect(location.path()).toBe('/beer/192');
    });
  }));
});
