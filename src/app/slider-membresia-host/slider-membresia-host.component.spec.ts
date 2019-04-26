import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMembresiaHostComponent } from './slider-membresia-host.component';

describe('SliderMembresiaHostComponent', () => {
  let component: SliderMembresiaHostComponent;
  let fixture: ComponentFixture<SliderMembresiaHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMembresiaHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMembresiaHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
