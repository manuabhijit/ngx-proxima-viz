import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximaPieChartComponent } from './proxima-pie-chart/proxima-pie-chart.component';
import { PieChartComponent } from './proxima-pie-chart/pie-chart/pie-chart.component';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaPieChartComponent, PieChartComponent],
  imports: [CommonModule, ControlPannelModule],
  exports: [ProximaPieChartComponent],
})
export class ProximaPieChartModule {}
