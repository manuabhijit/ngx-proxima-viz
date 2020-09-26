import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/nvd3-directed-graph.sample';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';

@Component({
  selector: 'proxima-proxima-directed-graph',
  templateUrl: './proxima-directed-graph.component.html',
  styleUrls: ['./proxima-directed-graph.component.css'],
})
export class ProximaDirectedGraphComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
