import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore/firestore.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../../../environments/environment';
import { MessageInterface } from '../interfaces/message.interface';
import { UiService } from '../presentation/ui.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  public createMessage(message: MessageInterface) {

    const colRef = this.db.collection('messages').doc(message.fromUID).collection('convos');
    colRef.add(message).catch(err => {
      console.log("Did you turn on Firestore Rules for /messages/{userId}/convos/{convoId} ?");
      console.log(err);

    });


  }
}
