import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create banner component', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    expect(element.querySelector('h2').textContent).toEqual(' Find the  perfect beer ');
  });

  it('should render paragraph', () => {
    expect(element.querySelector('p').textContent).toEqual('Find out which beer is ideal for you or for that special dinner.');
  });

  it('should render image', () => {
    expect(element.querySelector('img[src="/assets/signage.svg"]').alt).toContain('Old brewery sign with beer mug.');
  });
});
