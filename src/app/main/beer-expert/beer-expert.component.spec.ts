import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerExpertComponent } from './beer-expert.component';

describe('BeerExpertComponent', () => {
  let component: BeerExpertComponent;
  let fixture: ComponentFixture<BeerExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
