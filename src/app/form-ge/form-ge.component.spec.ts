import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeComponent } from './form-ge.component';

describe('FormGeComponent', () => {
  let component: FormGeComponent;
  let fixture: ComponentFixture<FormGeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
