import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaSunburstChartComponent } from './proxima-sunburst-chart.component';

describe('ProximaSunburstChartComponent', () => {
  let component: ProximaSunburstChartComponent;
  let fixture: ComponentFixture<ProximaSunburstChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaSunburstChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaSunburstChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
