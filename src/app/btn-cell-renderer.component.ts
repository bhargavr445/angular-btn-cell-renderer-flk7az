import { Component, OnDestroy } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'btn-cell-renderer',
  template: `
    <button (click)="btnClickedHandler($event)">Click Here!</button>
  `,
})
export class BtnCellRenderer implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    console.log('*******', this.params);
    this.params.clicked(this.params);
  }

  refresh() {
    return false;
  }
}
