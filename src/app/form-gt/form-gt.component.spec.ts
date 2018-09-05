import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGtComponent } from './form-gt.component';

describe('FormGtComponent', () => {
  let component: FormGtComponent;
  let fixture: ComponentFixture<FormGtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
