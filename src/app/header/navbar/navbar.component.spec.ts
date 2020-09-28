import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should render open menu button', () => {
    expect(compiled.querySelector('#close-menu').textContent).toEqual('Close menu');
  });

  describe('has link', () => {
    it('popular beers', () => {
      expect(compiled.querySelector('a[href="#popular-beers"]').textContent).toEqual('Popular Beers');
    });

    it('food pairing', () => {
      expect(compiled.querySelector('a[href="#food-pairing"]').textContent).toEqual('Food Pairing');
    });

    it('beer expert', () => {
      expect(compiled.querySelector('a[href="#beer-expert"]').textContent).toEqual('Beer Expert');
    });
  });
});
