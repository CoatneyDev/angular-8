import { Component, ViewChild, AfterViewInit, Type, Input, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DynamicDataService } from '../../services/dynamic-data.service';

@Component({
  selector: 'coatneydev-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss']
})
export class DynamicDialogComponent {
  @ViewChild("link", { static: false }) anchor: ElementRef;

  @Input() type: string;

  constructor(public dialog: MatDialog, private dynamicService: DynamicDataService) { }

  public openDialog(componentType: Type<any>) {
    /*     const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(DynamicDataComponent, dialogConfig); */
    //const dialogRef = this.dialog.open(DynamicDataComponent);
    const dialogRef = this.dialog.open(componentType);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  public open() {

    if (this.type) {
      this.openDialog(this.dynamicService.getComponent(this.type));
    }
    return false;
  }
}
