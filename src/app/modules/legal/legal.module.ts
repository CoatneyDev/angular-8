import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { FaqComponent } from './pages/faq/faq.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [FaqComponent, PolicyComponent, TermsComponent],
  imports: [
    CommonModule,
    LegalRoutingModule
  ],
  exports: [
    LegalRoutingModule,
    FaqComponent,
    PolicyComponent,
    TermsComponent
  ]
})
export class LegalModule { }
