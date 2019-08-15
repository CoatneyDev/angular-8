import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from 'src/app/modules/dashboard/pages/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/modules/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
