import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgMaterialModule } from '../../core/presentation/ng-material.module';
import { DynamicDialogModule } from '../../core/modules/dynamic-dialog.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMaterialModule,
    FlexLayoutModule,
    DynamicDialogModule
  ],
  exports: [
    FormsModule,
    NgMaterialModule,
    FlexLayoutModule,
    DynamicDialogModule
  ]
})
export class AuthenticationModule { }
