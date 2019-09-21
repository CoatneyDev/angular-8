import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileInterface } from '../interfaces/profile.interface';
import { UserInterface } from '../interfaces/user.interface';
import { AddressInterface } from '../interfaces/address.interface';
import { MemberInterface } from '../interfaces/member.interface';

export class Member {
    id: string; // Member collection id
    uid: string; // Firebase auth user id
    profile: ProfileInterface;
    user: UserInterface;
    address: AddressInterface;
    verified: boolean;

    constructor(private firestoreProfile?: firebase.User) {

        if (firestoreProfile) {
            this.uid = firestoreProfile.uid;
            this.profile.displayName = firestoreProfile.displayName;
            this.user.email = firestoreProfile.email;
            this.profile.photo = firestoreProfile.photoURL;
            this.verified = firestoreProfile.emailVerified;
        }
    }
}
