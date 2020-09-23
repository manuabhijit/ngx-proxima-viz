import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { OPTIONS, DATA } from '../@samples/nvd3-scatter.sample';

@Component({
  selector: 'lib-proxima-scatter-plot',
  templateUrl: './proxima-scatter-plot.component.html',
  styleUrls: ['./proxima-scatter-plot.component.css'],
})
export class ProximaScatterPlotComponent implements OnInit {
  @ViewChild('nvd3Containter') public nvd3Containter: ElementRef | undefined;

  options;
  data;
  ngOnInit() {
    setInterval(() => {
      console.log({ nvd3Containter: this.nvd3Containter });
    }, 2000);

    this.options = OPTIONS;

    this.data = DATA;
  }
}
