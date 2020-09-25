import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaCumulativeLineChartComponent } from './proxima-cumulative-line-chart/proxima-cumulative-line-chart.component';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaCumulativeLineChartComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaCumulativeLineChartComponent],
})
export class ProximaCumulativeLineChartModule {}
