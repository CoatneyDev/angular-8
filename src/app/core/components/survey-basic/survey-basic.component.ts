import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CoreModule } from '../../core.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { SurveyService } from '../../services/survey.service';


@Component({
  selector: 'coatneydev-survey-basic',
  templateUrl: './survey-basic.component.html',
  styleUrls: ['./survey-basic.component.scss']
})
export class SurveyBasicComponent implements OnInit {
  @Output() surveySubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLinear = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  // fourth group was deleted
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private survey: SurveyService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    // fourth group was deleted
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this.formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this.formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this.formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
    this.ninthFormGroup = this.formBuilder.group({
      ninthCtrl: ['', Validators.required]
    });
    this.tenthFormGroup = this.formBuilder.group({
      tenthCtrl: ['', Validators.required]
    });

  }

  onSubmit() {

    //this.db.createSurveyEntry({ 'type': 'workgnome market survey A1', 'person': this.person, 'questions': [this.firstFormGroup.value, this.secondFormGroup.value, this.thirdFormGroup.value, this.fifthFormGroup.value, this.sixthFormGroup.value, this.seventhFormGroup.value, this.eighthFormGroup.value, this.ninthFormGroup.value, this.tenthFormGroup.value] });
    this.survey.survey.surveyType = "WorkGnome Basic Survey";
    this.survey.survey.questions.push(this.firstFormGroup.value);
    this.survey.survey.questions.push(this.secondFormGroup.value);
    this.survey.survey.questions.push(this.thirdFormGroup.value);
    this.survey.survey.questions.push(this.fifthFormGroup.value);
    this.survey.survey.questions.push(this.sixthFormGroup.value);
    this.survey.survey.questions.push(this.seventhFormGroup.value);
    this.survey.survey.questions.push(this.eighthFormGroup.value);
    this.survey.survey.questions.push(this.ninthFormGroup.value);
    this.survey.survey.questions.push(this.tenthFormGroup.value);

    this.survey.submitSurvey();
    this.surveySubmitted.emit(false);
  }

}
