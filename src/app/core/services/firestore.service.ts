import { Injectable } from '@angular/core';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore/firestore.module';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

//import { environment } from '../../../environments/environment';
import { MessageInterface } from '../interfaces/message.interface';
//import { UiService } from '../presentation/ui.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Member } from '../models/member';
import { SurveyInterface } from '../interfaces/survey.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  // Create add a convo document for a user
  public createMessage(message: MessageInterface) {

    const colRef = this.db.collection('messages').doc(message.fromUID).collection('convos');
    colRef.add(message).catch(err => {
      console.log("Did you turn on Firestore Rules for /messages/{userId}/convos/{convoId} ?");
      console.log(err);

    });
  }

  public createNewletterSub(name: string, email: string, userType: string) {
    console.log("creating newsletter... " + name + ' ' + email + ' ' + userType);

    if (!name || !email || !userType) {
      console.log("Missing info. Cannot create newsletter subscription.");
      return;
    }
    const sub = { name, email, userType };
    const colRef = this.db.collection('newsletter');
    colRef.add(sub).catch(err => {
      console.log("Did you turn on Firestore Rules for /newsletter ?");
      console.log(err);

    });
  }

  public createSurveyEntry(survey: SurveyInterface) {
    console.log("creating survey " + survey);

    if (!survey) {
      console.log("Missing info. Cannot create survey entry.");
      return;
    }

    const colRef = this.db.collection('surveys');
    colRef.add(survey).catch(err => {
      console.log("Did you turn on Firestore Rules for /survey ?");
      console.log(err);

    });
  }

  // Fetch generic collection by name
  fetchCollection(collection: string): Observable<any> {
    const obs: Observable<any> = this.db
      .collection(collection)
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      )
    return obs;
  }

  // Fetch Message collection for a user
  fetchUserMessageCollection(uid: string): Observable<MessageInterface[]> {
    const obs: Observable<MessageInterface[]> = this.db
      .collection('messages')
      .doc(uid)
      .collection('convos')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MessageInterface;
          const id = a.payload.doc.id;

          return { id, ...data };
        }))
      )
    return obs;
  }


  // Fetch typed Members collection
  fetchMembersCollection(): Observable<Member[]> {
    const obs: Observable<Member[]> = this.db
      .collection('members')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Member;
          const id = a.payload.doc.id;
          data.uid = id;
          return { id, ...data };
        }))
      )
    return obs;
  }





}
