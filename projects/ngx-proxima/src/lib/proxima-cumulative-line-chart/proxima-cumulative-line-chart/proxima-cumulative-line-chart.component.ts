import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/mvd3-cumulative-line-chart.sample';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';

@Component({
  selector: 'proxima-proxima-cumulative-line-chart',
  templateUrl: './proxima-cumulative-line-chart.component.html',
  styleUrls: ['./proxima-cumulative-line-chart.component.css'],
})
export class ProximaCumulativeLineChartComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
