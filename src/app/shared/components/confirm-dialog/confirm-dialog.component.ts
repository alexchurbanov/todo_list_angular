import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

export interface ConfirmDialogData {
  message: string;
  confirmCaption?: string;
  cancelCaption?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent {

  constructor(public dialogRef: DialogRef<boolean>, @Inject(DIALOG_DATA) public data: ConfirmDialogData) {
  }

}
