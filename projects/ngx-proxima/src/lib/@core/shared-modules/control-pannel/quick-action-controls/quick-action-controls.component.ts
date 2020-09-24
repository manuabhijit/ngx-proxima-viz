import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'proxima-quick-action-controls',
  templateUrl: './quick-action-controls.component.html',
  styleUrls: ['./quick-action-controls.component.scss'],
})
export class QuickActionControlsComponent implements OnInit {
  @Output() public saveGraphAsSvg: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  triggerSaveGraphAsSvg(): void {
    this.saveGraphAsSvg.next();
  }
}
