import { Component, OnInit } from '@angular/core';
import { OPTIONS, DATA } from '../@sample/nvd3-parallel-candlestick.sample';
import { TriggerHelperUtility } from '../../@core/helpers/trigger-helpers.utility';
import { ProximaChart } from '../../@core/abstract/proxima-chart.abstract';

@Component({
  selector: 'proxima-candlestick-chart',
  templateUrl: './proxima-candlestick-chart.component.html',
  styleUrls: ['./proxima-candlestick-chart.component.css'],
})
export class ProximaCandlestickChartComponent extends ProximaChart implements OnInit {
  constructor() {
    super();
    this.options = OPTIONS;
    this.data = DATA;
  }
}
