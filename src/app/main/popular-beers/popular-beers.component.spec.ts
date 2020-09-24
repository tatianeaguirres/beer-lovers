import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBeersComponent } from './popular-beers.component';

describe('PopularBeersComponent', () => {
  let component: PopularBeersComponent;
  let fixture: ComponentFixture<PopularBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
