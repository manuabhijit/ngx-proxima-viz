import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaPieChartComponent } from './proxima-pie-chart/proxima-pie-chart.component';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';

@NgModule({
  declarations: [ProximaPieChartComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaPieChartComponent],
})
export class ProximaPieChartModule {}
