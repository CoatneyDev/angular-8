import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore/firestore.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor() { }
}
