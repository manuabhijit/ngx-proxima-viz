import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaScatterPlotComponent } from './proxima-scatter-plot/proxima-scatter-plot.component';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';

@NgModule({
  declarations: [ProximaScatterPlotComponent],
  imports: [CommonModule, GNvd3Module],
  exports: [ProximaScatterPlotComponent],
})
export class ProximaScatterPlotModule {}
