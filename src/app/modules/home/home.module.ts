import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    RouterModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
