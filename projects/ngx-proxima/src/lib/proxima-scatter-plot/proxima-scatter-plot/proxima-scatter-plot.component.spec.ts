import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaScatterPlotComponent } from './proxima-scatter-plot.component';

describe('ProximaScatterPlotComponent', () => {
  let component: ProximaScatterPlotComponent;
  let fixture: ComponentFixture<ProximaScatterPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaScatterPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaScatterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
