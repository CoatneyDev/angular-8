
import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
//import { MatTooltipModule } from '@angular/material/tooltip';

import * as fromRoot from '../../../../app.reducer';
//import { CoreModule } from '../../../../core/core.module';
import { MessageInterface } from '../../../../core/interfaces/message.interface';
import { MessagingService } from '../../../../core/services/messaging.service';
import { ProfileService } from '../../profile.service';
import { UiService } from 'src/app/core/presentation/ui.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { ProfileInterface } from 'src/app/core/interfaces/profile.interface';
import { MemberInterface } from 'src/app/core/interfaces/member.interface';
//import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Member } from 'src/app/core/models/member';

// Native JS function declaration
declare function animateCSS(element: string, animation: string, callback: any): any;

@Component({
  selector: 'coatneydev-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  isLoading$: Observable<boolean>;
  @Output() memberChanged: Subscription;

  public memberProfile: MemberInterface; // Member we are interested in

  constructor(
    private profileService: ProfileService,
    private messageService: MessagingService,
    private store: Store<fromRoot.State>,
    //private uiService: UiService,
    private route: ActivatedRoute,
    //private router: Router,
    //private afAuth: AngularFireAuth
  ) {

    this.memberProfile = this.profileService.dummyMember();

    // Subscription does not rely on page load
    this.route.params.subscribe(params => this.loadProfile(params.id));
  }

  ngOnInit() {



    this.store.select(fromRoot.getIsLoading);

    // Default profile is logged in user
    //this.memberProfile = this.profileService.thisMember;

    // NOT WHAT WE WANTED!!
    // Change profile when user logs in or out out
    /*  this.memberChanged = this.profileService.MemberUpdated.subscribe(
       (member: Member) => {
         console.log("MEMBERCHANGED ON ME!!!");
         if (!this.route.paramMap['id']) {
           console.log("PARAM MAP ID EMPTY");
           this.loadProfile(member.id); // Members collection id
         }
         else {
           console.log("PARAM MAP ID NOT EMPTY");
         }
       }
     ); */


    animateCSS('.content', 'bounce', function () {
      // Do something after animation

    });

  } // ngOnInit



  // Load the Profile of the member specified by uid
  loadProfile(uid: string) {
    console.log("LOADING PROFILE FOR " + uid);
    if (uid)
      this.memberProfile = this.profileService.getProfile(uid);
  }

  mailClick() {
    // Explicit cast necessary to find the style property
    var el = <HTMLElement>document.getElementsByClassName('content')[0];
    el.style.visibility = 'visible';
    el.style.display = 'flex';
    animateCSS('.content', 'lightSpeedIn', function () {
      // Do something after animation

    });

  }

  onSubmit(form: NgForm) {

    /*  this.authService.registerUser(
       {
         email: form.value.email,
         password: form.value.password
       }
     ); */

    // Save Message
    let message: MessageInterface = {
      name: '',
      company: '',
      email: '',
      phone: '',
      fromUID: this.profileService.thisMember.uid,
      message: form.value['message']

    };

    // Inform User and Reset Form
    this.messageService.saveMessage(message);
    //NOTE: If the message DID NOT SUCCEED it is still telling user
    // the message was sent. This Async call needs to wait for the 
    // promise to return in order to be sure that a message was sent.
    // It should wait for return from server or timeout & report error.

    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }

  /* 
    testFS() {
      //this.profile.addFirestoreTestRecords();
  
      //var members = this.profile.fetchCollection('members');
      //members.subscribe(result => console.log(result));
  
      this.profile.getProfiles();
    }
  
    testProf() {
      let rnd = Math.floor(Math.random() * this.profile.members.length);
  
      let p: MemberInterface = this.profile.getProfile(this.profile.members[rnd].uid);
      this.uid = p.uid;
      this.name = p.profile.displayName;
      this.city = p.address.city;
      this.bio = p.profile.bio;
      this.photo = p.profile.photo;
      this.jobs = p.profile.jobs;
      this.favor = p.profile.favor;
      this.folks = p.profile.folks;
      this.rating = p.profile.rating;
  
    }
   */


}
