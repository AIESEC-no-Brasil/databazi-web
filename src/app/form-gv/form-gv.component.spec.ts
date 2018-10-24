import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGvComponent } from './form-gv.component';

describe('FormGvComponent', () => {
  let component: FormGvComponent;
  let fixture: ComponentFixture<FormGvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
