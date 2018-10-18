import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeThankYouComponent } from './form-ge-thank-you.component';

describe('FormGeThankYouComponent', () => {
  let component: FormGeThankYouComponent;
  let fixture: ComponentFixture<FormGeThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
