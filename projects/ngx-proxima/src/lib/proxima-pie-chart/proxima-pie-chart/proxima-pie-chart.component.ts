import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@samples/sample.dataset';

@Component({
  selector: 'proxima-pie-chart',
  templateUrl: './proxima-pie-chart.component.html',
  styleUrls: ['./proxima-pie-chart.component.scss'],
})
export class ProximaPieChartComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
