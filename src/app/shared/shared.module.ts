import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';


@NgModule({
  declarations: [
    ConfirmDialogComponent,
    InfoDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    ConfirmDialogComponent,
    InfoDialogComponent
  ]
})
export class SharedModule {
}
