import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserInterface } from './interfaces/user.interface';
import { AuthDataInterface } from './interfaces/auth-data-interface';
import { UiService } from '../../core/presentation/ui.service';
import * as fromRoot from '../../app.reducer';
import * as UI from '../../core/presentation/ui.actions';
import * as AUTH from '../authentication/authentication.actions';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: boolean = false;
  authChange = new Subject<boolean>();
  redirectTo: string = null;

  constructor(
    private route: Router,
    private afAuth: AngularFireAuth,
    private profile: ProfileService,
    private snackbar: MatSnackBar,
    private uiService: UiService,
    private store: Store<{ ui: fromRoot.State }>
  ) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {

      if (user) {
        this.store.dispatch(new AUTH.SetAuthenticated());
        this.route.navigate(['/dashboard']);
        this.profile.initProfile();
      } else {
        this.store.dispatch(new AUTH.SetUnauthenticated());
      }
    });
  }

  registerUser(authData: AuthDataInterface) {

    this.store.dispatch(new UI.StartLoading());

    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      this.store.dispatch(new UI.StartLoading());
    })
      .catch(err => {
        this.store.dispatch(new UI.StartLoading());
        this.uiService.showSnackBar(err.message, null, 3000);
      });
  }

  login(authData: AuthDataInterface) {

    this.store.dispatch(new UI.StartLoading());

    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password)
      .then(result => {
        this.store.dispatch(new UI.StopLoading());
      })
      .catch(err => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackBar(err.message, null, 3000);
      });
  }

  logout() {
    this.store.dispatch(new UI.StopLoading());
    this.afAuth.auth.signOut();
    this.route.navigate(['/login']);
    this.uiService.showSnackBar("You have successfully logged out!", null, 5000);
  }

  isAuth() {
    return this.isAuthenticated;
  }


}
