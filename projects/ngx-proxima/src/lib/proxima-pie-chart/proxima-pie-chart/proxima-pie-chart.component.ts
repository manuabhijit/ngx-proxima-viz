import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';

@Component({
  selector: 'proxima-pie-chart',
  templateUrl: './proxima-pie-chart.component.html',
  styleUrls: ['./proxima-pie-chart.component.scss'],
})
export class ProximaPieChartComponent implements OnInit {
  constructor() {}

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  ngOnInit(): void {}
}
