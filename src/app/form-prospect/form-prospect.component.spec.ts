import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProspectComponent } from './form-prospect.component';

describe('FormProspectComponent', () => {
  let component: FormProspectComponent;
  let fixture: ComponentFixture<FormProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
