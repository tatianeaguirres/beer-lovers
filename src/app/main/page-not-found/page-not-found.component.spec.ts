import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create page not found component', () => {
    expect(component).toBeTruthy();
  });

  describe('has image', () => {
    it('return icon', () => {
      expect(element.querySelector('a.page-not-found__return-link>img').src).toContain('/assets/return.svg');
    });
    it('hop', () => {
      expect(element.querySelector('.page-not-found__header>img').src).toContain('/assets/hop.svg');
    });
    it('opener', () => {
      expect(element.querySelector('.page-not-found__content>img').src).toContain('/assets/opener.svg');
    });
  });

  it('should render heading', () => {
    expect(element.querySelector('h2').textContent).toEqual('Oops! The page you were looking for doesn\'t exist');
  });

  it('should render paragraph', () => {
    expect(element.querySelector('p').textContent).toEqual(' You may have mistyped the address or the page may have moved. Return to homepage. ');
  });

  it('should render link', () => {
    expect(element.querySelector('a.page-not-found__return-link').ariaLabel).toEqual('Return to homepage.');
  });
});
