import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGtEmbeddedComponent } from './form-gt-embedded.component';

describe('FormGtComponent', () => {
  let component: FormGtEmbeddedComponent;
  let fixture: ComponentFixture<FormGtEmbeddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGtEmbeddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGtEmbeddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
