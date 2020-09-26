import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaBubblePlotComponent } from './proxima-bubble-plot.component';

describe('ProximaBubblePlotComponent', () => {
  let component: ProximaBubblePlotComponent;
  let fixture: ComponentFixture<ProximaBubblePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaBubblePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaBubblePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
