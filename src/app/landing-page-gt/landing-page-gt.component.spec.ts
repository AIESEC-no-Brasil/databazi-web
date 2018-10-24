import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGtComponent } from './landing-page-gt.component';

describe('LandingPageGtComponent', () => {
  let component: LandingPageGtComponent;
  let fixture: ComponentFixture<LandingPageGtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageGtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageGtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
