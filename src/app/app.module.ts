import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProximaScatterPlotModule } from 'projects/ngx-proxima/src/lib/proxima-scatter-plot/proxima-scatter-plot.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProximaScatterPlotModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
