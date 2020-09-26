import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/nvd3-histogram-bar-chart.sample';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';

@Component({
  selector: 'proxima-histogram-bar-chart',
  templateUrl: './proxima-histogram-bar-chart.component.html',
  styleUrls: ['./proxima-histogram-bar-chart.component.css'],
})
export class ProximaHistogramBarChartComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
