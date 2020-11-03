import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create about component', () => {
    expect(component).toBeTruthy();
  });

  describe('has image', () => {
    it('Woman avatar', () => {
      expect(element.querySelector('section.about__header>img').alt).toContain('Woman in traditional oktoberfest clothes holding a pint of beer');
    });
    it('Angular logo', () => {
      expect(element.querySelector('a[aria-label="Angular"]>img').src).toContain('/assets/angular.svg');
    });
    it('TypeScript logo', () => {
      expect(element.querySelector('a[aria-label="TypeScript"]>img').src).toContain('/assets/typescript.svg');
    });
    it('Sass logo', () => {
      expect(element.querySelector('a[aria-label="Sass"]>img').src).toContain('/assets/sass.svg');
    });
    it('Jasmine logo', () => {
      expect(element.querySelector('a[aria-label="Jasmine"]>img').src).toContain('/assets/jasmine.svg');
    });
    it('Karma logo', () => {
      expect(element.querySelector('a[aria-label="Karma"]>img').src).toContain('/assets/karma.png');
    });
  });

  describe('has heading', () => {
    it('h2', () => {
      expect(element.querySelector('h2').textContent).toEqual('About Beer Lovers');
    });
    it('h3', () => {
      expect(element.querySelector('section.about__tech-stack>h3').textContent).toEqual('Tech Stack');
      expect(element.querySelector('section.about__credits>h3').textContent).toEqual('Credits');
    });
  });

  describe('has link', () => {
    it('Tatiane Aguirres', () => {
      expect(element.querySelector('a[href="https://www.tatianeaguirres.com/"]').textContent).toEqual('Tatiane Aguirres');
    });
    it('Angular', () => {
      expect(element.querySelector('a[href="https://angular.io/"]').textContent).toEqual('Angular');
    });
    it('GitHub repository', () => {
      expect(element.querySelector('a[href="https://github.com/tatianeaguirres/beer-lovers"]').textContent).toEqual('GitHub repository');
    });
    it('The Punk API', () => {
      expect(element.querySelector('a[href="https://punkapi.com/"]').textContent).toEqual('The Punk API');
    });
    it('Brewdog', () => {
      expect(element.querySelector('a[href="https://www.brewdog.com/uk/"]').textContent).toEqual('Brewdog');
    });
    it('The Simpsons', () => {
      expect(element.querySelector('a[href="https://en.wikipedia.org/wiki/The_Simpsons"]').textContent).toEqual('The Simpsons™');
    });
    it('20th Century Studios, Inc.', () => {
      expect(element.querySelector('a[href="https://www.20thcenturystudios.com/"]').textContent).toEqual('20th Century Studios, Inc');
    });
    it('dDara', () => {
      expect(element.querySelector('a[href="https://www.flaticon.com/authors/ddara"]').textContent).toEqual('dDara');
    });
    it('Flaticon', () => {
      expect(element.querySelector('a[href="https://www.flaticon.com/"]').textContent).toEqual('Flaticon');
    });
  });
});
