import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaCandlestickChartComponent } from './proxima-candlestick-chart.component';

describe('ProximaCandlestickChartComponent', () => {
  let component: ProximaCandlestickChartComponent;
  let fixture: ComponentFixture<ProximaCandlestickChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaCandlestickChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaCandlestickChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
