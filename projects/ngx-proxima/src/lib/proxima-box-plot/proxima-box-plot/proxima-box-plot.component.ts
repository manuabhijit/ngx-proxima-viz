import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/nvd3-box-plot.sample';

@Component({
  selector: 'proxima-proxima-box-plot',
  templateUrl: './proxima-box-plot.component.html',
  styleUrls: ['./proxima-box-plot.component.css'],
})
export class ProximaBoxPlotComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  public ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
