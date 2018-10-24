import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGvComponent } from './landing-page-gv.component';

describe('LandingPageGvComponent', () => {
  let component: LandingPageGvComponent;
  let fixture: ComponentFixture<LandingPageGvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageGvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
