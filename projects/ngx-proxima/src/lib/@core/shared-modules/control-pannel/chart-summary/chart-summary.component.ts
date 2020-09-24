import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'proxima-chart-summary',
  templateUrl: './chart-summary.component.html',
  styleUrls: ['./chart-summary.component.scss'],
})
export class ChartSummaryComponent implements OnInit {
  @Input() public caption;
  @Input() public title;
  @Input() public subtitle;

  constructor() {}

  ngOnInit(): void {}
}
