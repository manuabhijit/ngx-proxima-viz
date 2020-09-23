import { AfterViewInit, Component, Input } from '@angular/core';
import { ChartJs } from '../../../@core/abstract/chart-js.abstract';
import { PIE_CHART } from '../../@samples/sample.dataset';

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent extends ChartJs implements AfterViewInit {
  @Input() public chartData: Chart.ChartConfiguration = PIE_CHART;

  constructor() {
    super();
  }
}
