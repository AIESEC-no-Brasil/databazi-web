import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGpComponent } from './form-gp.component';

describe('FormGpComponent', () => {
  let component: FormGpComponent;
  let fixture: ComponentFixture<FormGpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGpComponent ]
    })
    .compileComponents();''
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
