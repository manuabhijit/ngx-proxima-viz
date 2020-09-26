import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/nvd3-parallel-coordinate.sample';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';

@Component({
  selector: 'proxima-parallel-coordinate-plot',
  templateUrl: './proxima-parallel-coordinate-plot.component.html',
  styleUrls: ['./proxima-parallel-coordinate-plot.component.css'],
})
export class ProximaParallelCoordinatePlotComponent extends ProximaChart implements OnInit {
  public options;
  public data;

  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
