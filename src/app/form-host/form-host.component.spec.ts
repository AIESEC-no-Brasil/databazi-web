import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHostComponent } from './form-host.component';

describe('FormGtComponent', () => {
  let component: FormHostComponent;
  let fixture: ComponentFixture<FormHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
