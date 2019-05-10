import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageHostComponent } from './landing-page-host.component';

describe('LandingPageHostComponent', () => {
  let component: LandingPageHostComponent;
  let fixture: ComponentFixture<LandingPageHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
