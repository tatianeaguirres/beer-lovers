import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { BeerItemComponent } from './beer-item.component';

import beerMock from './../../../shared/beer-mock.json';

describe('BeerItemComponent', () => {
  let component: BeerItemComponent;
  let fixture: ComponentFixture<BeerItemComponent>;
  let element;
  let location: Location;
  let router: Router;
  const expectedBeer = beerMock[0];
  const mockId = '192';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerItemComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'beer/' + mockId, component: BeerItemComponent}]
        )
      ]
    })
    .compileComponents()
      .then(() => {
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
        fixture = TestBed.createComponent(BeerItemComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        component.beer = expectedBeer;
        fixture.detectChanges();
      });
  }));

  it('should create beer item component', () => {
    expect(component).toBeTruthy();
  });

  describe('has image', () => {
    it('loading when the component is mounted', () => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(element.querySelector('img[alt="Loading image."]').src).toContain('/assets/loading.gif');
    });
    it('beer bottle when the API returns data', () => {
      component.onHideImageLoader();
      fixture.detectChanges();
      expect(element.querySelector('img[alt="Bottle of beer Punk IPA 2007 - 2010."]').src).toBe('https://images.punkapi.com/v2/192.png');
    });
  });

  it('should have heading', () => {
    expect(element.querySelector('h3').textContent).toBe('Punk IPA 2007 - 2010');
  });

  it('should have paragraph', () => {
    expect(element.querySelector('p').textContent).toBe('Post Modern Classic. Spiky. Tropical. Hoppy.');
  });

  it('should have link', () => {
    expect(element.querySelector('a.c-beer-item').title).toBe('Go to beer Punk IPA 2007 - 2010 details.');
  });

  it('should navigate to /beer/:id', async(() => {
    router.navigate(['/beer/' + mockId]).then(() => {
      expect(location.path()).toBe('/beer/192');
    });
  }));
});
