import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@sample/nvd3-directed-graph.sample';

@Component({
  selector: 'proxima-proxima-directed-graph',
  templateUrl: './proxima-directed-graph.component.html',
  styleUrls: ['./proxima-directed-graph.component.css'],
})
export class ProximaDirectedGraphComponent implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  constructor() {}

  public ngOnInit(): void {
    this.options = OPTIONS;
    this.data = DATA;
  }
}
