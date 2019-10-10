import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { CoreModule } from '../../../../core/core.module';

import { NgForm } from '@angular/forms';

import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'coatneydev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trademarked: boolean = false;
  sponsorshipLink = '';
  showSurvey: boolean = false;

  constructor(private db: FirestoreService, private route: Router, private survey: SurveyService) { }

  ngOnInit() {
    this.sponsorshipLink = environment.sponsorshipLink;
    this.showSurvey = false;
  }

  onSubmitSignup(form: NgForm) {
    const value = form.value;

    // Get the users email
    this.db.createNewletterSub('anonymous', value.email, 'subscriber');

    // Reset form
    form.resetForm();

  }

  onSurveySubmitted(event: boolean) {

    this.showSurvey = event;

    if (!event) { // Close popup
      this.route.navigate(['/home'], { fragment: null });
    }
    else { // Open popup
      this.route.navigate(['/home'], { fragment: 'popup' });
    }
  }

  onSubmitSurvey(form: NgForm, $event: Event) {
    $event.preventDefault();


    const value = form.value;

    // Create the subscription
    this.db.createNewletterSub(value.name, value.email, value.userType);

    // Update Survey
    this.survey.survey.name = value.name;
    this.survey.survey.email = value.email;
    this.survey.survey.responderType = value.userType;

    // Reset form
    form.resetForm();


    // Open popup
    //this.onSurveySubmitted(true);
    this.showSurvey = true;

  }

}
