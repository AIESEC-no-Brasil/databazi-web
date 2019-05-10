import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGvEmbeddedComponent } from './form-gv-embedded.component';

describe('FormGvComponent', () => {
  let component: FormGvEmbeddedComponent;
  let fixture: ComponentFixture<FormGvEmbeddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGvEmbeddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGvEmbeddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
