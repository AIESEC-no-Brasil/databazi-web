import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfflineEmbeddedComponent } from './form-offline-embedded.component';

describe('FormGtComponent', () => {
  let component: FormOfflineEmbeddedComponent;
  let fixture: ComponentFixture<FormOfflineEmbeddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfflineEmbeddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOfflineEmbeddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
