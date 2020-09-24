import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/nvd3-stackarea.sample';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';

@Component({
  selector: 'proxima-stackarea-chart',
  templateUrl: './proxima-stackarea-chart.component.html',
  styleUrls: ['./proxima-stackarea-chart.component.css'],
})
export class ProximaStackareaChartComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();
  constructor() {}

  public ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
