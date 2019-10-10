import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { SurveyInterface } from '../interfaces/survey.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public survey: SurveyInterface;

  constructor(private db: FirestoreService) {
    this.clear();
  }




  clear() {
    this.survey = { name: '', email: '', surveyType: '', responderType: '', questions: [] };
  }

  submitSurvey() {

    this.db.createSurveyEntry(this.survey);
    this.clear();
  }


}

