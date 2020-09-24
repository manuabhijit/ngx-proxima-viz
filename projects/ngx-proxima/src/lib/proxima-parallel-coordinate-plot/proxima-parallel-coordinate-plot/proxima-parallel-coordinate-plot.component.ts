import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/nvd3-parallel-coordinate.sample';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';

@Component({
  selector: 'proxima-parallel-coordinate-plot',
  templateUrl: './proxima-parallel-coordinate-plot.component.html',
  styleUrls: ['./proxima-parallel-coordinate-plot.component.css'],
})
export class ProximaParallelCoordinatePlotComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
