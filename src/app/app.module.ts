import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProximaBoxPlotModule } from 'projects/ngx-proxima/src/lib/proxima-box-plot/proxima-box-plot.module';
import { ProximaCandlestickChartModule } from 'projects/ngx-proxima/src/lib/proxima-candlestick-chart/proxima-candlestick-chart.module';
import { ProximaCumulativeLineChartModule } from 'projects/ngx-proxima/src/lib/proxima-cumulative-line-chart/proxima-cumulative-line-chart.module';
import { ProximaDirectedGraphModule } from 'projects/ngx-proxima/src/lib/proxima-directed-graph/proxima-directed-graph.module';
import { ProximaDonutChartModule } from 'projects/ngx-proxima/src/lib/proxima-donut-chart/proxima-donut-chart.module';
import { ProximaHistogramBarChartModule } from 'projects/ngx-proxima/src/lib/proxima-histogram-bar-chart/proxima-histogram-bar-chart.module';
import { ProximaParallelCoordinatePlotModule } from 'projects/ngx-proxima/src/lib/proxima-parallel-coordinate-plot/proxima-parallel-coordinate-plot.module';
import { ProximaPieChartModule } from 'projects/ngx-proxima/src/lib/proxima-pie-chart/proxima-pie-chart.module';
import { ProximaScatterPlotModule } from 'projects/ngx-proxima/src/lib/proxima-scatter-plot/proxima-scatter-plot.module';
import { ProximaStackareaChartModule } from 'projects/ngx-proxima/src/lib/proxima-stackarea-chart/proxima-stackarea-chart.module';
import { ProximaSunburstChartModule } from 'projects/ngx-proxima/src/lib/proxima-sunburst-chart/proxima-sunburst-chart.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ProximaBoxPlotModule,
    ProximaPieChartModule,
    ProximaDonutChartModule,
    ProximaScatterPlotModule,
    ProximaSunburstChartModule,
    ProximaStackareaChartModule,
    ProximaDirectedGraphModule,
    ProximaCandlestickChartModule,
    ProximaHistogramBarChartModule,
    ProximaCumulativeLineChartModule,
    ProximaParallelCoordinatePlotModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
