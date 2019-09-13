import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsComponent } from './pages/terms/terms.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { CookiesComponent } from './pages/cookies/cookies.component';

const routes: Routes = [
  { path: '', component: FaqComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PolicyComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
