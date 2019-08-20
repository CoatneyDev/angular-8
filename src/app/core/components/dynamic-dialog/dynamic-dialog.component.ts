import { Component, ViewChild, AfterViewInit, Type } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DynamicDataService } from '../../services/dynamic-data.service';


@Component({
  selector: 'coatneydev-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss']
})
export class DynamicDialogComponent {

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
    this.openDialog(this.dynamicService.getTermsComponent());
  }
}
