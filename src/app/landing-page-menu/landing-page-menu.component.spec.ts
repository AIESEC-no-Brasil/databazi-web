import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMenuComponent } from './landing-page-menu.component';

describe('LandingPageMenuComponent', () => {
  let component: LandingPageMenuComponent;
  let fixture: ComponentFixture<LandingPageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
