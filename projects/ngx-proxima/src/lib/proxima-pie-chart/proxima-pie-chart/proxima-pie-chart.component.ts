import { Component, OnInit, Input } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@samples/sample.dataset';
import { COLOR_PALLET } from '../../@core/datasets/color.dataset';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';

@Component({
  selector: 'proxima-pie-chart',
  templateUrl: './proxima-pie-chart.component.html',
  styleUrls: ['./proxima-pie-chart.component.scss'],
})
export class ProximaPieChartComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
