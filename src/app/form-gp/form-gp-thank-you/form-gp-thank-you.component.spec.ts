import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGtThankYouComponent } from './form-gt-thank-you.component';

describe('FormGtThankYouComponent', () => {
  let component: FormGtThankYouComponent;
  let fixture: ComponentFixture<FormGtThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGtThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGtThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
