import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileInterface } from '../../core/interfaces/profile.interface';
//import { AngularFirestore } from '@angular/fire/firestore';


//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

//import { Profile } from 'src/app/core/models/profile';

import { MemberInterface } from 'src/app/core/interfaces/member.interface';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Member } from 'src/app/core/models/member';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public MemberUpdated: Subject<Member> = new Subject<Member>();

  public members: Member[] = [];
  public thisMember: Member;
  /*
    public name: string;
    public email: string;
    public photoUrl: string;
    public emailVerified: boolean;
    public uid: string;
  */
  constructor(
    private afAuth: AngularFireAuth,
    //private db: AngularFirestore,
    private firestoreService: FirestoreService
  ) {

    this.getProfiles();
    this.initProfile();

  }

  memberFactory(usr: firebase.User): MemberInterface {
    return {
      id: '',
      uid: usr.uid,
      verified: false,
      user: {
        name: usr.displayName,
        email: usr.email,
        mobile: ''
      },
      profile: {
        displayName: usr.displayName,
        photo: usr.photoURL,
        bio: '',
        favor: 0,
        folks: 0,
        jobs: 0,
        rating: 0.0
      },
      address: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',

      }

    };
  }

  initProfile() {
    var user = this.getUser();

    console.log("init profile");
    if (user != null) {
      this.thisMember = this.memberFactory(user);
      this.MemberUpdated.next(this.thisMember);


      if (user.displayName == undefined && user.photoURL == undefined) {
        this.updateProfile(user.displayName, user.photoURL);
      }
      else if (user.displayName == undefined) {
        this.updateProfile(user.displayName);
      }



      console.log("initProfile : " + user.displayName);
      this.thisMember.profile.displayName = user.displayName;

      console.log("initProfile : " + user.photoURL);
      this.thisMember.profile.photo = user.photoURL;


      console.log("initProfile : " + user.phoneNumber);
      this.thisMember.user.mobile = user.phoneNumber;
      console.log("initProfile : " + user.email);
      this.thisMember.user.email = user.email;
      console.log("initProfile : " + user.emailVerified);
      this.thisMember.user.name = user.displayName;
      this.thisMember.verified = user.emailVerified;
      console.log("initProfile : " + user.uid);
      this.thisMember.uid = user.uid;
      console.log("done init profile for " + this.thisMember.profile.displayName);
      /*
      this.name = user.displayName;
      this.email = user.email;
      this.photoUrl = user.photoURL;
      this.emailVerified = user.emailVerified;
      this.uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      */
    }
  }

  updateProfile(name: string, photoURL?: string) {
    console.log("updating profile");
    var user = this.getUser();
    user.updateProfile({ displayName: name, photoURL: photoURL })
      .then(response => {
        console.log("profile update success");
      })
      .catch(err => {
        console.log("profile error: " + err);
      });
  }

  // Get Firestore Auth User
  getUser() {
    return this.afAuth.auth.currentUser;
  }

  // Fetch profile document from server by uid
  getProfile(uid: string): MemberInterface {
    return this.members.find(member => {
      return member.uid === uid;
    });
  }

  getProfiles() {
    // If we haven't fetched members list...
    if (this.members.length === 0) { // Go get 'em
      this.firestoreService.fetchMembersCollection().subscribe((members: Member[]) => this.members = members);
    }
  }

  // update member (profile)
  updateMember(member: MemberInterface) {
    this.thisMember = member;
    this.MemberUpdated.next(this.thisMember);
  }




}
