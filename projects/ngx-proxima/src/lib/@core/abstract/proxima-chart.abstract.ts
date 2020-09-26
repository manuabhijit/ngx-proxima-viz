import { Input, Directive, OnInit } from '@angular/core';
import { TriggerHelperUtility } from '../helpers/trigger-helpers.utility';
import { cloneDeep } from 'lodash-es';
import { COLOR_PALLET } from '../datasets/color.dataset';

@Directive()
export class ProximaChart implements OnInit {
  public options;
  public data;

  public readonly triggerUtility: TriggerHelperUtility = new TriggerHelperUtility();

  @Input() public set chartOptions(options: any) {
    this.options = cloneDeep(options);
    this.triggerUtility.redrawChart();
  }

  @Input() public set chartData(data: any) {
    this.data = cloneDeep(data);
    this.triggerUtility.redrawChart();
  }

  constructor() {
    this.showCaseColors();
  }

  private showCaseColors() {
    setInterval(() => {
      const schemaNames: string[] = Object.keys(COLOR_PALLET);
      const schemaName = schemaNames[Math.floor(Math.random() * schemaNames.length)];
      this.options.chart.color = COLOR_PALLET[schemaName];
      this.triggerUtility.redrawChart();
    }, 5000);
  }

  public ngOnInit(): void {}
}
