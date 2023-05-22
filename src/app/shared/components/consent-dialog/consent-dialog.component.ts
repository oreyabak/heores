import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'shared-consent-dialog',
  templateUrl: './consent-dialog.component.html',
  styleUrls: ['./consent-dialog.component.scss']
})
export class ConsentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConsentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public title: string) {}

    onCancelClick(): void {
      this.dialogRef.close(false);
    }

    onAcceptClick(): void {
      this.dialogRef.close(true);
    }
}
