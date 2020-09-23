import { Chart } from 'chart.js';
import { AfterViewInit, ViewChild, ElementRef, Directive } from '@angular/core';

@Directive()
export abstract class ChartJs implements AfterViewInit {
  public abstract chartData: Chart.ChartConfiguration;
  public chart: Chart | undefined;
  @ViewChild('mychart') public mychart: ElementRef | undefined;

  public ngAfterViewInit(): void {
    if (this.mychart) {
      const canvas = this.mychart.nativeElement;
      const ctx = canvas.getContext('2d');
      this.chart = new Chart(ctx, this.chartData);
    }
  }
}
