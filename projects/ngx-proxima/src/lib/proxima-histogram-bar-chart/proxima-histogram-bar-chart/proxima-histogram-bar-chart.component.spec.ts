import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaHistogramBarChartComponent } from './proxima-histogram-bar-chart.component';

describe('ProximaHistogramBarChartComponent', () => {
  let component: ProximaHistogramBarChartComponent;
  let fixture: ComponentFixture<ProximaHistogramBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaHistogramBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaHistogramBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
