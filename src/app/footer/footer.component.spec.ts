import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let element;
  const fakeDate = String(new Date().getFullYear());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render paragraphs', () => {
    expect(element.querySelector('.footer__content-wrap>p:nth-child(1)').textContent).toEqual('Tatiane Aguirres © 2020. ');
    expect(element.querySelector('.footer__content-wrap>p:nth-child(2)').textContent).toEqual(' Made with ❤ and Angular in . ');
    expect(element.querySelector('.footer__content-wrap>p:nth-child(3)').textContent).toEqual(' Icons made by dDara from Flaticon. ');
  });

  it('should render time', () => {
    expect(element.querySelector('time').textContent).toEqual(fakeDate);
  });

  it('should render span', () => {
    expect(element.querySelector('span[aria-label="love"]').textContent).toEqual('❤');
  });

  describe('has image', () => {
    it('paddle', () => {
      expect(element.querySelector('footer>img').src).toContain('/assets/paddle.svg');
    });
    it('the Netherlands flag', () => {
      expect(element.querySelector('img[alt="The Netherlands"]').src).toContain('/assets/netherlands.png');
    });
  });

  describe('has link', () => {
    it('Tatiane Aguirres', () => {
      expect(element.querySelector('a[href="https://www.tatianeaguirres.com/"]').textContent).toEqual('Tatiane Aguirres');
    });
    it('Angular', () => {
      expect(element.querySelector('a[href="https://angular.io/"]').textContent).toEqual('Angular');
    });
    it('dDara', () => {
      expect(element.querySelector('a[href="https://www.flaticon.com/authors/ddara"]').textContent).toEqual('dDara');
    });
    it('Flaticon', () => {
      expect(element.querySelector('a[href="https://www.flaticon.com/"]').textContent).toEqual('Flaticon');
    });
  });

});
