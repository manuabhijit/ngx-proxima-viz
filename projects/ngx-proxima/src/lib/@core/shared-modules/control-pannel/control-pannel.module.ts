import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartSummaryComponent } from './chart-summary/chart-summary.component';
import { QuickActionControlsComponent } from './quick-action-controls/quick-action-controls.component';

@NgModule({
  declarations: [QuickActionControlsComponent, ChartSummaryComponent],
  imports: [CommonModule],
  exports: [QuickActionControlsComponent, ChartSummaryComponent],
})
export class ControlPannelModule {}
