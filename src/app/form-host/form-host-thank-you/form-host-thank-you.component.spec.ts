import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHostThankYouComponent } from './form-host-thank-you.component';

describe('FormHostThankYouComponent', () => {
  let component: FormHostThankYouComponent;
  let fixture: ComponentFixture<FormHostThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHostThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHostThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
