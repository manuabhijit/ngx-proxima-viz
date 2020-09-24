import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaScatterPlotComponent } from './proxima-scatter-plot/proxima-scatter-plot.component';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaScatterPlotComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaScatterPlotComponent],
})
export class ProximaScatterPlotModule {}
