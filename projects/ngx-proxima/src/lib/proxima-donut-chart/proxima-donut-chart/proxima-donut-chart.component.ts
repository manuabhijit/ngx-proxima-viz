import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/nvd3-donut-chart.sample';
import { COLOR_PALLET } from './../../@core/datasets/color.dataset';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';

@Component({
  selector: 'proxima-proxima-donut-chart',
  templateUrl: './proxima-donut-chart.component.html',
  styleUrls: ['./proxima-donut-chart.component.css'],
})
export class ProximaDonutChartComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
