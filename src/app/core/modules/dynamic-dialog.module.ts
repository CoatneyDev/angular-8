import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../presentation/ng-material.module';
import { DynamicDialogComponent } from '../components/dynamic-dialog/dynamic-dialog.component';
import { DynamicDataComponent } from '../components/dynamic-dialog/dynamic-data.component';
import { DynamicDataDirective } from '../directives/dynamic-data.directive';

@NgModule({
  entryComponents: [DynamicDialogComponent, DynamicDataComponent],
  declarations: [DynamicDialogComponent, DynamicDataComponent, DynamicDataDirective],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports: [
    DynamicDialogComponent,
    DynamicDataComponent,
    DynamicDataDirective,
    NgMaterialModule
  ]
})
export class DynamicDialogModule { }

