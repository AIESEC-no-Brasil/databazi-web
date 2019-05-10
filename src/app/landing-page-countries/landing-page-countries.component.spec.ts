import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCountriesComponent } from './landing-page-countries.component';

describe('LandingPageCountriesComponent', () => {
  let component: LandingPageCountriesComponent;
  let fixture: ComponentFixture<LandingPageCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
