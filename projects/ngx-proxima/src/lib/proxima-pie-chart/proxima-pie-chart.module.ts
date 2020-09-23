import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaPieChartComponent } from './proxima-pie-chart/proxima-pie-chart.component';
import { PieChartComponent } from './proxima-pie-chart/pie-chart/pie-chart.component';

@NgModule({
  declarations: [ProximaPieChartComponent, PieChartComponent],
  imports: [CommonModule],
  exports: [ProximaPieChartComponent]
})
export class ProximaPieChartModule { }

export {ProximaPieChartComponent}