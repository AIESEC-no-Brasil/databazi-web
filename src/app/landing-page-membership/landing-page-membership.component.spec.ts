import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMembershipComponent } from './landing-page-membership.component';

describe('LandingPageMembershipComponent', () => {
  let component: LandingPageMembershipComponent;
  let fixture: ComponentFixture<LandingPageMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
