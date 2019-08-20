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

      if (user.displayName == undefined && user.photoURL == undefined) {
        this.updateProfile("Member", "https://picsum.photos/200/300");
      }
      else if (user.displayName == undefined) {
        this.updateProfile("Member");
      }

      this.name = user.displayName;
      this.email = user.email;
      this.photoUrl = user.photoURL;
      this.emailVerified = user.emailVerified;
      this.uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
    }
  }

  updateProfile(name: string, photoURL?: string) {
    console.log("updating profile");
    var user = this.afAuth.auth.currentUser;
    user.updateProfile({ displayName: name, photoURL: photoURL })
      .then(response => {
        console.log("profile update success");
      })
      .catch(err => {
        console.log("profile error: " + err);
      });
  }

  getProfile() {
    return this.afAuth.auth.currentUser;
  }
}
