import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListComponent } from './beer-list.component';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create beer list component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display loading when isFetching is true', () => {
    component.isFetching = true;
    fixture.detectChanges();
    expect(element.querySelector('p#beer-list-loading').textContent).toBe('Loading...');
  });

  it('should display "no beers available" when beers is null', () => {
    component.beers = null;
    fixture.detectChanges();
    expect(element.querySelector('p#beer-list-no-beers-available').textContent).toBe('No beers available!');
  });
});
