import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BeerDetailsComponent } from './beer-details.component';
import { BeersService } from './../../shared/beers.service';

import beerMock from './../../shared/beer-mock.json';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;
  let element;
  const mockData = beerMock;
  const mockId = '192';
  const mockRoute = {
    snapshot: {
      params: {
        id: mockId
      }
    }
  };
  const mockBeersService = jasmine.createSpyObj('BeersService', ['searchBeers']);
  const searchBeersSpy = mockBeersService.searchBeers.and.returnValue(of(mockData));

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ BeerDetailsComponent ],
        providers: [
          { provide: BeersService, useValue: mockBeersService },
          { provide: ActivatedRoute, useValue: mockRoute }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BeerDetailsComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
      });
  }));

  it('should create beer details component', () => {
    expect(component).toBeTruthy();
  });

  it('should get id entry by route', () => {
    component.ngOnInit();
    expect(component.id).toEqual(mockId);
  });

  it('should make a call to BeersService.searchBeers()', () => {
    expect(searchBeersSpy.calls.any()).toBe(true, 'searchBeers called');
  });

  it('should show beer details after component initialized', () => {
    expect(element.querySelector('h2#beer-name').textContent.trim()).toBe('Punk IPA 2007 - 2010');
    expect(element.querySelector('p#beer-description').textContent.trim()).toBe('This is James and Martin\'s original take on an American IPA, subverted with punchy New Zealand hops.');
    expect(element.querySelector('p#beer-tagline').textContent.trim()).toBe('Post Modern Classic. Spiky. Tropical. Hoppy.');
    expect(element.querySelector('li#food-item-0').textContent.trim()).toBe('Spicy carne asada with a pico de gallo sauce.');
    expect(element.querySelector('li#food-item-1').textContent.trim()).toBe('Shredded chicken tacos with a mango chilli lime salsa.');
    expect(element.querySelector('li#food-item-2').textContent.trim()).toBe('Cheesecake with a passion fruit swirl sauce.');
    expect(element.querySelector('td#beer-srm').textContent).toBe('8.5');
    expect(element.querySelector('td#beer-ebc').textContent).toBe('17');
    expect(element.querySelector('td#beer-abv').textContent).toBe('6%');
    expect(element.querySelector('td#beer-ibu').textContent).toBe('60');
  });

  describe('has heading', () => {
    it('h2', () => {
      expect(element.querySelector('h2#beer-name').textContent).toBe('Punk IPA 2007 - 2010');
    });
    it('h3', () => {
      expect(element.querySelector('section#food-pairing-section>h3').textContent).toEqual('Food Pairing');
      expect(element.querySelector('section#beer-color-section>h3').textContent).toEqual('Beer Color');
      expect(element.querySelector('section#beer-strength-section>h3').textContent).toEqual('Strength');
      expect(element.querySelector('section#beer-bitterness-section>h3').textContent).toEqual('Bitterness');
    });
  });

  describe('has image', () => {
    it('return icon', () => {
      expect(element.querySelector('a[aria-label="Return to homepage."]>img').src).toContain('/assets/return.svg');
    });
    it('hop', () => {
      expect(element.querySelector('img#hop-image').src).toContain('/assets/hop.svg');
    });
    it('beer bottle', () => {
      expect(element.querySelector('img[alt="Bottle of beer Punk IPA 2007 - 2010."]').src)
        .toContain('https://images.punkapi.com/v2/192.png');
    });
  });

  it('should have Pale Amber color when SRM is 8.5', () => {
    component.onDeterminesBeerColor(8.5);
    expect(component.beerColorName).toBe('Pale Amber');
    expect(component.beerColor).toBe('#F49F44');
  });

  it('should have false isFetching when searchBeers() is called', () => {
    component.isFetching = true;
    component.searchBeers(mockId);
    expect(component.isFetching).toBe(false);
  });

  it('should have false isLoadingImage when onHideImageLoader() is called', () => {
    component.isLoadingImage = true;
    component.onHideImageLoader();
    expect(component.isLoadingImage).toBe(false);
  });

  it('should display "no beers available" when beers is null', () => {
    component.beers = null;
    fixture.detectChanges();
    expect(element.querySelector('#beer-details-no-beers-available>h2').textContent).toBe('No beers available!');
  });

  it('should display loading when isFetching is true', () => {
    component.isFetching = true;
    fixture.detectChanges();
    expect(element.querySelector('img[alt="Loading"]').src).toContain('/assets/loading.gif');
  });

});
