import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


// FA
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import { PipesModule } from './pipes/pipes.module';

import { NgMaterialModule } from './presentation/ng-material.module';

import { DynamicDialogModule } from '../core/modules/dynamic-dialog.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { environment } from '../../environments/environment';
import { StopClickPropagationDirective } from './directives/stop-click-propagation.directive';
import { ContactComponent } from './components/contact/contact.component';
import { FooterLinksComponent } from './components/footer/footer-links/footer-links.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SurveyBasicComponent } from './components/survey-basic/survey-basic.component';

@NgModule({

  declarations: [HeaderComponent, FooterComponent, NavigationComponent, ToolbarComponent, SidenavComponent, StopClickPropagationDirective, ContactComponent, FooterLinksComponent, DropdownDirective, DropdownComponent, SurveyBasicComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,
    NgMaterialModule,
    PipesModule,
    DynamicDialogModule,
    FontAwesomeModule,

  ],
  exports: [
    CommonModule,
    NgMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule,
    AngularFireAuthModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SidenavComponent,
    PipesModule,
    DynamicDialogModule,
    StopClickPropagationDirective,
    FontAwesomeModule,
    SurveyBasicComponent,

  ],
  providers: [AngularFirestore]
})
export class CoreModule { }
