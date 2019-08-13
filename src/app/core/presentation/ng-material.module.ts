import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  /*
 





  
  



  MatTooltipModule,
  MatOptionModule,
  MatSelectModule
  */
}
  from '@angular/material';

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    /*

   
    




    


    MatTooltipModule,
    MatOptionModule,
    MatSelectModule
    */
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    /*








    MatTooltipModule,
    MatOptionModule,
    MatSelectModule
    */
  ]
})
export class NgMaterialModule { }
