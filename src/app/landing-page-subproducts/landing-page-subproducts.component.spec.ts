import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageSubproductsComponent } from './landing-page-subproducts.component';

describe('LandingPageSubproductsComponent', () => {
  let component: LandingPageSubproductsComponent;
  let fixture: ComponentFixture<LandingPageSubproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageSubproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageSubproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
