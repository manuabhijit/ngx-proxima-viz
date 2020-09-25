import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/nvd3-donut-chart.sample';

@Component({
  selector: 'proxima-proxima-donut-chart',
  templateUrl: './proxima-donut-chart.component.html',
  styleUrls: ['./proxima-donut-chart.component.css'],
})
export class ProximaDonutChartComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  public ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
