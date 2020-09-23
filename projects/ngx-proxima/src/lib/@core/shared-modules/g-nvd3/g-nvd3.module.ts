import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nvd3Component } from './nvd3/nvd3.component';

@NgModule({
  declarations: [Nvd3Component],
  imports: [CommonModule],
  exports: [Nvd3Component],
})
export class GNvd3Module {}
