import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoreModule } from '@angular/flex-layout';
import { ProfileModule } from '../profile/profile.module';
import { NgMaterialModule } from 'src/app/core/presentation/ng-material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    ProfileModule,
    NgMaterialModule
  ],
  exports: [
    DashboardRoutingModule,
    DashboardComponent,
    CoreModule,
    ProfileModule,
    NgMaterialModule
  ]
})
export class DashboardModule { }
