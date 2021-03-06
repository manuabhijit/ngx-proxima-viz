import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GNvd3Module } from '../@core/shared-modules/g-nvd3/g-nvd3.module';
import { ProximaCandlestickChartComponent } from './proxima-candlestick-chart/proxima-candlestick-chart.component';
import { ControlPannelModule } from '../@core/shared-modules/control-pannel/control-pannel.module';

@NgModule({
  declarations: [ProximaCandlestickChartComponent],
  imports: [CommonModule, GNvd3Module, ControlPannelModule],
  exports: [ProximaCandlestickChartComponent],
})
export class ProximaCandlestickChartModule {}
