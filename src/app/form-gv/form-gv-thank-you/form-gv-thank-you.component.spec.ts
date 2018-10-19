import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGvThankYouComponent } from './form-gv-thank-you.component';

describe('FormGvThankYouComponent', () => {
  let component: FormGvThankYouComponent;
  let fixture: ComponentFixture<FormGvThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGvThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGvThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
