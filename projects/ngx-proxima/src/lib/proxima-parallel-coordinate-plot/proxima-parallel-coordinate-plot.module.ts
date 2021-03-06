import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ProximaParallelCoordinatePlotComponent } from './proxima-parallel-coordinate-plot/proxima-parallel-coordinate-plot.component';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaParallelCoordinatePlotComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaParallelCoordinatePlotComponent],
})
export class ProximaParallelCoordinatePlotModule {}
