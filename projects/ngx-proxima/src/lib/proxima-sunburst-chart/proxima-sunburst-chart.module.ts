import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ProximaSunburstChartComponent } from './proxima-sunburst-chart/proxima-sunburst-chart.component';

@NgModule({
  declarations: [ProximaSunburstChartComponent],
  imports: [CommonModule, GNvd3Module],
  exports: [ProximaSunburstChartComponent],
})
export class ProximaSunburstChartModule {}
