import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import { MessageInterface } from '../../interfaces/message.interface';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'coatneydev-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isLoading$: Observable<boolean>;
  location: "Atlantis, Burmuda";

  message: MessageInterface;
  /* 
    name: string = "";
    company: string = "";
    email: string = "";
    phone: string = "";
    message: string = ""; */

  constructor(
    private messageService: MessagingService,
    private store: Store<fromRoot.State>
  ) { }


  ngOnInit() {
    this.store.select(fromRoot.getIsLoading);

  }

  onSubmit(form: NgForm) {

    /*  this.authService.registerUser(
       {
         email: form.value.email,
         password: form.value.password
       }
     ); */
    this.messageService.saveMessage(this.message);
  }



}
