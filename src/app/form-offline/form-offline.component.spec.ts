import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfflineComponent } from './form-offline.component';

describe('FormOfflineComponent', () => {
  let component: FormOfflineComponent;
  let fixture: ComponentFixture<FormOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
