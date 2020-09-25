import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ProximaDonutChartComponent } from './proxima-donut-chart/proxima-donut-chart.component';

@NgModule({
  declarations: [ProximaDonutChartComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaDonutChartComponent],
})
export class ProximaDonutChartModule {}
