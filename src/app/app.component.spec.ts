import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render app-header', () => {
    expect(element.querySelector('app-header')).toBeTruthy();
  });

  it('should render main', () => {
    expect(element.querySelector('main')).toBeTruthy();
  });

  it('should render app-footer', () => {
    expect(element.querySelector('app-footer')).toBeTruthy();
  });
});
