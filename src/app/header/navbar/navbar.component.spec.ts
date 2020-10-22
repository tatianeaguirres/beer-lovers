import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { AboutComponent } from '../../main/about/about.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let element;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'about', component: AboutComponent}]
        )
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    expect(element.querySelector('h2').textContent).toEqual('Main menu');
  });

  describe('has link', () => {
    it('popular beers', () => {
      expect(element.querySelector('a[href="#popular-beers"]').textContent).toEqual('Popular Beers');
    });
    it('food pairing', () => {
      expect(element.querySelector('a[href="#food-pairing"]').textContent).toEqual('Food Pairing');
    });
    it('beer expert', () => {
      expect(element.querySelector('a[href="#beer-expert"]').textContent).toEqual('Beer Expert');
    });
    it('about', () => {
      expect(element.querySelector('a[href="/about"]').textContent).toEqual('About');
    });
  });

  it('should navigate to /about', async(() => {
    router.navigate(['/about']).then(() => {
      expect(location.path()).toBe('/about');
    });
  }));
});
