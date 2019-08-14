import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMembershipComponent } from './form-membership.component';

describe('FormGtComponent', () => {
  let component: FormMembershipComponent;
  let fixture: ComponentFixture<FormMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
