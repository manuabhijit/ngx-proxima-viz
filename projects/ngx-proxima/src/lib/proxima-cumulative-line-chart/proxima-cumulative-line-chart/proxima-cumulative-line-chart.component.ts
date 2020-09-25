import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/mvd3-cumulative-line-chart.sample';

@Component({
  selector: 'proxima-proxima-cumulative-line-chart',
  templateUrl: './proxima-cumulative-line-chart.component.html',
  styleUrls: ['./proxima-cumulative-line-chart.component.css'],
})
export class ProximaCumulativeLineChartComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  public ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
