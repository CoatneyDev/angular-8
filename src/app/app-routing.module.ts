import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/authentication/pages/login/login.component';
import { SignupComponent } from './modules/authentication/pages/signup/signup.component';

const routes: Routes = [
  { path: '', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'legal', loadChildren: './modules/legal/legal.module#LegalModule' },
  { path: 'profiles/:id', loadChildren: './modules/profile/profile.module#ProfileModule' },
  { path: 'profiles', loadChildren: './modules/profile/profile.module#ProfileModule' },
  { path: 'team', loadChildren: './modules/team/team.module#TeamModule' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
