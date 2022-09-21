import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

export interface InfoDialogData {
  message: string;
}

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.sass']
})
export class InfoDialogComponent {

  constructor(public dialogRef: DialogRef<undefined>, @Inject(DIALOG_DATA) public data: InfoDialogData) {
  }

}
