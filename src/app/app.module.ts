import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProximaParallelCoordinatePlotModule } from 'projects/ngx-proxima/src/lib/proxima-parallel-coordinate-plot/proxima-parallel-coordinate-plot.module';
import { ProximaScatterPlotModule } from 'projects/ngx-proxima/src/lib/proxima-scatter-plot/proxima-scatter-plot.module';
import { ProximaSunburstChartModule } from 'projects/ngx-proxima/src/lib/proxima-sunburst-chart/proxima-sunburst-chart.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProximaScatterPlotModule, ProximaSunburstChartModule, ProximaParallelCoordinatePlotModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
