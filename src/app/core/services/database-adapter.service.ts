import { Injectable } from '@angular/core';

import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseAdapterService {

  constructor(private fs: FirestoreService) { }
}
