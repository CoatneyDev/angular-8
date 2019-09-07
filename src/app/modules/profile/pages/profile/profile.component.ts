
import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../../app.reducer';
import { MessageInterface } from '../../../../core/interfaces/message.interface';
import { MessagingService } from '../../../../core/services/messaging.service';
import { ProfileService } from '../../profile.service';
import { UiService } from 'src/app/core/presentation/ui.service';

declare function animateCSS(element: string, animation: string, callback: any): any;

@Component({
  selector: 'coatneydev-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoading$: Observable<boolean>;
  @Input() uid: string;
  @Input() name: string;
  @Input() photo: string;
  @Input() description: string;

  constructor(
    private profile: ProfileService,
    private messageService: MessagingService,
    private store: Store<fromRoot.State>,
    private uiService: UiService) { }

  ngOnInit() {
    this.store.select(fromRoot.getIsLoading);

    this.uid = this.profile.uid ? this.profile.uid : "user";
    this.name = this.profile.name ? this.profile.name : "name";
    this.photo = this.profile.photoUrl ? this.profile.photoUrl : "https://picsum.photos/100/100";
    this.description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem id natus quasi minus, dict sint.";


    animateCSS('.content', 'bounce', function () {
      // Do something after animation

    });

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
      fromUID: this.profile.uid,
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
}
