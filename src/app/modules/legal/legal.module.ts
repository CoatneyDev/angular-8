import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../../core/presentation/ng-material.module';
import { LegalRoutingModule } from './legal-routing.module';
import { FaqComponent } from './pages/faq/faq.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CookiesComponent } from './pages/cookies/cookies.component';

@NgModule({
  declarations: [FaqComponent, PolicyComponent, TermsComponent, CookiesComponent],
  imports: [
    CommonModule,
    LegalRoutingModule,
    NgMaterialModule
  ],
  exports: [
    LegalRoutingModule,
    FaqComponent,
    PolicyComponent,
    TermsComponent,
    CookiesComponent,
    NgMaterialModule
  ]
})
export class LegalModule { }
