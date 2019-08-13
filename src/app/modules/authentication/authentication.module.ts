import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireAuth } from '@angular/fire/auth';

import { NgMaterialModule } from '../../core/presentation/ng-material.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    NgMaterialModule,
    FlexLayoutModule
  ]
})
export class AuthenticationModule { }
