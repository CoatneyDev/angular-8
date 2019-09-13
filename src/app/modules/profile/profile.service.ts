import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileInterface } from '../../core/interfaces/profile.interface';
import { Profile } from 'src/app/core/models/profile';

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

  // Fetch profile object from server by uid
  fetchProfile(uid?: string): ProfileInterface {
    if (!uid || uid === undefined) // Return current user profile
      return new Profile(this.getProfile());

    console.log("NEW PROFILE");
    let profile: ProfileInterface;
    profile.bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque dolore incidunt ad harum laudantium saepe facere cupiditate reiciendis, praesentium impedit nobis eum mollitia cum.Asperiores, nihil aliquid.Ab, facere similique.';
    profile.email = 'a@b.com';
    profile.name = 'Large Marge';
    profile.photo = 'https://source.unsplash.com/nJHvhXS4C0U';
    profile.uid = 'SDHF8KAS630EHHA68QWJFFISEWGZFG';
    profile.verified = true;

    return profile;


  }
}
