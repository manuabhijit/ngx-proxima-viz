import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProximaCandlestickChartModule } from 'projects/ngx-proxima/src/lib/proxima-candlestick-chart/proxima-candlestick-chart.module';
import { ProximaParallelCoordinatePlotModule } from 'projects/ngx-proxima/src/lib/proxima-parallel-coordinate-plot/proxima-parallel-coordinate-plot.module';
import { ProximaPieChartModule } from 'projects/ngx-proxima/src/lib/proxima-pie-chart/proxima-pie-chart.module';
import { ProximaScatterPlotModule } from 'projects/ngx-proxima/src/lib/proxima-scatter-plot/proxima-scatter-plot.module';
import { ProximaStackareaChartModule } from 'projects/ngx-proxima/src/lib/proxima-stackarea-chart/proxima-stackarea-chart.module';
import { ProximaSunburstChartModule } from 'projects/ngx-proxima/src/lib/proxima-sunburst-chart/proxima-sunburst-chart.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProximaDirectedGraphModule } from 'projects/ngx-proxima/src/lib/proxima-directed-graph/proxima-directed-graph.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ProximaScatterPlotModule,
    ProximaSunburstChartModule,
    ProximaStackareaChartModule,
    ProximaDirectedGraphModule,
    ProximaCandlestickChartModule,
    ProximaParallelCoordinatePlotModule,

    ProximaPieChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
