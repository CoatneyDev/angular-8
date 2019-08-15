import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore/firestore.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { PipesModule } from './pipes/pipes.module';
import { reducers } from '../app.reducer';

import { NgMaterialModule } from './presentation/ng-material.module';
import { AuthenticationModule } from '../modules/authentication/authentication.module';
import { AuthenticationService } from '../modules/authentication/authentication.service';
import { ProfileModule } from '../modules/profile/profile.module';
import { ProfileService } from '../modules/profile/profile.service';
import { UiService } from './presentation/ui.service';
import { DatabaseAdapterService } from './services/database-adapter.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { environment } from '../../environments/environment';
import { application } from '../configs/app.config';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    NgMaterialModule,
    AuthenticationModule,
    ProfileModule,
    PipesModule

  ],
  exports: [
    NgMaterialModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SidenavComponent,
    AuthenticationModule,
    ProfileModule,
    PipesModule
  ],
  providers: [AuthenticationService, ProfileService, DatabaseAdapterService, UiService, AngularFirestore]
})
export class CoreModule { }
