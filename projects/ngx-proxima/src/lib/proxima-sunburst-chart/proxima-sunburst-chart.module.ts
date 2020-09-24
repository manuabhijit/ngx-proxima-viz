import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ProximaSunburstChartComponent } from './proxima-sunburst-chart/proxima-sunburst-chart.component';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaSunburstChartComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaSunburstChartComponent],
})
export class ProximaSunburstChartModule {}
