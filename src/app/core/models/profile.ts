import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileInterface } from '../interfaces/profile.interface';

export class Profile implements ProfileInterface {
    displayName: string;
    bio: string;
    photo: string;
    favor: number;
    folks: number;
    jobs: number;
    rating: number;


    constructor() {

    }
}
