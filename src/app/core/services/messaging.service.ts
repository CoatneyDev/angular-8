import { Injectable } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { MessageInterface } from '../interfaces/message.interface';
import { FirestoreService } from './firestore.service';
import { UiService } from '../presentation/ui.service';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {


  constructor(private db: FirestoreService) { }


  public saveMessage(message: MessageInterface) {

    this.db.createMessage(message);

    // messages/{userid}/message/{messageid}

  }
}
