import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from 'src/app/modules/dashboard/pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/modules/authentication/pages/login/login.component';
import { SignupComponent } from 'src/app/modules/authentication/pages/signup/signup.component';
import { AuthGuard } from 'src/app/modules/authentication/authentication.guard';

const routes: Routes = [
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
