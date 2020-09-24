import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ProximaDirectedGraphComponent } from './proxima-directed-graph/proxima-directed-graph.component';

@NgModule({
  declarations: [ProximaDirectedGraphComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaDirectedGraphComponent],
})
export class ProximaDirectedGraphModule {}
