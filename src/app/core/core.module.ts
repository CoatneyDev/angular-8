import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { PipesModule } from './pipes/pipes.module';
import { reducers } from '../app.reducer';
import { NgMaterialModule } from './presentation/ng-material.module';
import { AuthenticationModule } from '../modules/authentication/authentication.module';
import { DynamicDialogModule } from '../core/modules/dynamic-dialog.module';
import { LegalModule } from '../modules/legal/legal.module';
import { ProfileModule } from '../modules/profile/profile.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { environment } from '../../environments/environment';

@NgModule({

  declarations: [HeaderComponent, FooterComponent, NavigationComponent, ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    NgMaterialModule,
    AuthenticationModule,
    ProfileModule,
    PipesModule,
    DynamicDialogModule,
    LegalModule
  ],
  exports: [
    CommonModule,
    NgMaterialModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule,
    AngularFireAuthModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SidenavComponent,
    AuthenticationModule,
    ProfileModule,
    PipesModule,
    DynamicDialogModule,
    LegalModule

  ],
  providers: []
})
export class CoreModule { }
