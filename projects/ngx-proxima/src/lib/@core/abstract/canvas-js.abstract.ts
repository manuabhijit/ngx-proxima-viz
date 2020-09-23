import { AfterViewInit } from '@angular/core';
// Install Canvas npm and import in angular.json
// declare var CanvasJS: any;

export abstract class CanvasJs implements AfterViewInit {
  public abstract chartData: Chart.ChartConfiguration;

  public ngAfterViewInit(): void {
    // How to use canvas js
    // var chart = new CanvasJS.Chart('chart', this.chartData);
    // chart.render();
  }
}
