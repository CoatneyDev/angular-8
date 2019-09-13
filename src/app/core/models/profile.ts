import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileInterface } from '../interfaces/profile.interface';

export class Profile implements ProfileInterface {
    uid = '';
    name = '';
    email = '';
    photo = '';
    verified = false;
    bio = '';
    location = 'Earth';

    constructor(private firestoreProfile: firebase.User) {

        if (firestoreProfile === null) return;

        this.uid = firestoreProfile.uid;
        this.name = firestoreProfile.displayName;
        this.email = firestoreProfile.email;
        this.photo = firestoreProfile.photoURL;
        this.verified = firestoreProfile.emailVerified;
        this.bio = '';
        this.location = 'Earth';


    }
}
