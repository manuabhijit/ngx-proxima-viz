import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaHistogramBarChartComponent } from './proxima-histogram-bar-chart/proxima-histogram-bar-chart.component';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaHistogramBarChartComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaHistogramBarChartComponent],
})
export class ProximaHistogramBarChartModule {}
