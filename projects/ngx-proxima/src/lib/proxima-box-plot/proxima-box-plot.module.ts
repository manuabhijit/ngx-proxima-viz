import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaBoxPlotComponent } from './proxima-box-plot/proxima-box-plot.component';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaBoxPlotComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaBoxPlotComponent],
})
export class ProximaBoxPlotModule {}
