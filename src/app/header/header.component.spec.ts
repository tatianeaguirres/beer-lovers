import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render website\'s title', () => {
    expect(compiled.querySelector('h1').textContent).toEqual('BeerLoversApp');
  });

  it('should render open menu button', () => {
    expect(compiled.querySelector('#open-menu').textContent).toEqual('Open menu');
  });

  it('should render app-navbar', () => {
    expect(compiled.querySelector('#navbar')).toBeTruthy();
  });
});
