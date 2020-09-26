import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ProximaBubblePlotComponent } from './proxima-bubble-plot/proxima-bubble-plot.component';
import { ProximaScatterPlotComponent } from './proxima-scatter-plot/proxima-scatter-plot.component';

@NgModule({
  declarations: [ProximaScatterPlotComponent, ProximaBubblePlotComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaScatterPlotComponent, ProximaBubblePlotComponent],
})
export class ProximaScatterPlotModule {}
