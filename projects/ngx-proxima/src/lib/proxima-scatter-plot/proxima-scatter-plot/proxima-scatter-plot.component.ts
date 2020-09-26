import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { OPTIONS, DATA } from '../@samples/nvd3-scatter.sample';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'proxima-scatter-plot',
  templateUrl: './proxima-scatter-plot.component.html',
  styleUrls: ['./proxima-scatter-plot.component.css'],
})
export class ProximaScatterPlotComponent implements OnInit {
  @ViewChild('nvd3Containter') public nvd3Containter: ElementRef | undefined;

  protected readonly chartType: string = 'scatterChart';

  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  ngOnInit() {
    this.data = cloneDeep(DATA);
    this.options = cloneDeep(OPTIONS);
  }
}
