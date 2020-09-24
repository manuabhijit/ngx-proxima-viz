import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/nvd3-sunburst.chart';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';

@Component({
  selector: 'proxima-sunburst-chart',
  templateUrl: './proxima-sunburst-chart.component.html',
  styleUrls: ['./proxima-sunburst-chart.component.css'],
})
export class ProximaSunburstChartComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}