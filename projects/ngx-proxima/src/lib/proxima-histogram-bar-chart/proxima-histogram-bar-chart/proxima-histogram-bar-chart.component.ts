import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/nvd3-histogram-bar-chart.sample';

@Component({
  selector: 'proxima-histogram-bar-chart',
  templateUrl: './proxima-histogram-bar-chart.component.html',
  styleUrls: ['./proxima-histogram-bar-chart.component.css'],
})
export class ProximaHistogramBarChartComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  public ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
