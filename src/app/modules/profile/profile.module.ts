import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgMaterialModule } from '../../core/presentation/ng-material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [ProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PipesModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    EditProfileComponent,
    ProfileComponent,
    PipesModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
