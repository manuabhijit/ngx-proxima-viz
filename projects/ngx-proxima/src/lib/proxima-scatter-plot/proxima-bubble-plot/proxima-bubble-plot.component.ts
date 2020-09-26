import { Component, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { OPTIONS, DATA } from '../@samples/nvd3-scatter.sample';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'proxima-bubble-plot',
  templateUrl: './proxima-bubble-plot.component.html',
  styleUrls: ['./proxima-bubble-plot.component.css'],
})
export class ProximaBubblePlotComponent implements OnInit {
  protected readonly chartType: string = 'scatterChart';

  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  ngOnInit() {
    this.options = cloneDeep(OPTIONS);
    this.data = this.overrideShape(cloneDeep(DATA));
  }

  public overrideShape(data) {
    return data.map((dataItem) => {
      dataItem.values = dataItem.values.map((value) => ({ ...value, shape: 'circle' }));
      return dataItem;
    });
  }
}
