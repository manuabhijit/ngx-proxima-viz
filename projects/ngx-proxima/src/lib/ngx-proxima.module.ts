import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxProximaComponent } from './ngx-proxima.component';
import { ProximaPieChartModule } from './proxima-pie-chart/proxima-pie-chart.module';

@NgModule({
  declarations: [NgxProximaComponent],
  imports: [ProximaPieChartModule],
  exports: [NgxProximaComponent],
})
export class NgxProximaModule {
  public static forRoot(): ModuleWithProviders<NgxProximaModule> {
    return {
      ngModule: NgxProximaModule,
      providers: [],
    };
  }
}
