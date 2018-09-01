import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGeComponent } from './landing-page-ge.component';

describe('LandingPageGeComponent', () => {
  let component: LandingPageGeComponent;
  let fixture: ComponentFixture<LandingPageGeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageGeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageGeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
