import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMembershipThankYouComponent } from './form-membership-thank-you.component';

describe('FormMembershipThankYouComponent', () => {
  let component: FormMembershipThankYouComponent;
  let fixture: ComponentFixture<FormMembershipThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMembershipThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMembershipThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
