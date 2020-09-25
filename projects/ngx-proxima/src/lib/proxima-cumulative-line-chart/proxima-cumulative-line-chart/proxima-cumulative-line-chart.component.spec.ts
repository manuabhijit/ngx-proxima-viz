import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaCumulativeLineChartComponent } from './proxima-cumulative-line-chart.component';

describe('ProximaCumulativeLineChartComponent', () => {
  let component: ProximaCumulativeLineChartComponent;
  let fixture: ComponentFixture<ProximaCumulativeLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaCumulativeLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaCumulativeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
