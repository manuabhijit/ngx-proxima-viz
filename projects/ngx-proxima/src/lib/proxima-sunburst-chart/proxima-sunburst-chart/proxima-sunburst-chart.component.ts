import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/nvd3-sunburst.chart';

@Component({
  selector: 'lib-proxima-sunburst-chart',
  templateUrl: './proxima-sunburst-chart.component.html',
  styleUrls: ['./proxima-sunburst-chart.component.css'],
})
export class ProximaSunburstChartComponent implements OnInit {
  public options;
  public data;

  constructor() {}

  ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
