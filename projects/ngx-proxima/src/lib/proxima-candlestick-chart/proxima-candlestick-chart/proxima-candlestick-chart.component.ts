import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/nvd3-parallel-candlestick.sample';

@Component({
  selector: 'lib-proxima-candlestick-chart',
  templateUrl: './proxima-candlestick-chart.component.html',
  styleUrls: ['./proxima-candlestick-chart.component.css'],
})
export class ProximaCandlestickChartComponent implements OnInit {
  public options;
  public data;

  constructor() {}

  public ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
