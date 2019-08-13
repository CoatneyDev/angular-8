import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public name: string;
  public email: string;
  public photoUrl: string;
  public emailVerified: boolean;
  public uid: string;

  constructor(
    private afAuth: AngularFireAuth
  ) {

    this.initProfile();
  }

  initProfile() {
    var user = this.afAuth.auth.currentUser;
    if (user != null) {

      this.name = user.displayName;
      this.email = user.email;
      this.photoUrl = user.photoURL;
      this.emailVerified = user.emailVerified;
      this.uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
    }
  }

  getProfile() {
    return this.afAuth.auth.currentUser;
  }
}
