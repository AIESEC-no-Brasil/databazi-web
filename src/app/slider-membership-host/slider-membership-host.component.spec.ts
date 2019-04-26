import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMembershipHostComponent } from './slider-membership-host.component';

describe('SliderMembresiaHostComponent', () => {
  let component: SliderMembershipHostComponent;
  let fixture: ComponentFixture<SliderMembershipHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMembershipHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMembershipHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
