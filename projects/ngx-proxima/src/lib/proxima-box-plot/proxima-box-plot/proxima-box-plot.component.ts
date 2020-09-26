import { Component, OnInit } from '@angular/core';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';
import { DATA, OPTIONS } from '../@sample/nvd3-box-plot.sample';

@Component({
  selector: 'proxima-proxima-box-plot',
  templateUrl: './proxima-box-plot.component.html',
  styleUrls: ['./proxima-box-plot.component.css'],
})
export class ProximaBoxPlotComponent extends ProximaChart implements OnInit {
  public constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
