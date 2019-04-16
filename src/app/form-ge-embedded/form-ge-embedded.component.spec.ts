import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeEmbeddedComponent } from './form-ge-embedded.component';

describe('FormGeComponent', () => {
  let component: FormGeEmbeddedComponent;
  let fixture: ComponentFixture<FormGeEmbeddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeEmbeddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeEmbeddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
