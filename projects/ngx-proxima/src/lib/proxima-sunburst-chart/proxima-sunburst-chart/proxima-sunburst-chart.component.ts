import { Component, OnInit } from '@angular/core';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';
import { DATA, OPTIONS } from '../@sample/nvd3-sunburst.chart';

@Component({
  selector: 'proxima-sunburst-chart',
  templateUrl: './proxima-sunburst-chart.component.html',
  styleUrls: ['./proxima-sunburst-chart.component.css'],
})
export class ProximaSunburstChartComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
