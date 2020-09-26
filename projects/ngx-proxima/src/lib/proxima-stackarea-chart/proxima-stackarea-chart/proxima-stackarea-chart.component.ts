import { Component, OnInit } from '@angular/core';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';
import { DATA, OPTIONS } from '../@sample/nvd3-stackarea.sample';

@Component({
  selector: 'proxima-stackarea-chart',
  templateUrl: './proxima-stackarea-chart.component.html',
  styleUrls: ['./proxima-stackarea-chart.component.css'],
})
export class ProximaStackareaChartComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
