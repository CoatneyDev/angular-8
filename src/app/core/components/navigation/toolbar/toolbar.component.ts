import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { NgForm } from '@angular/forms';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'coatneydev-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSideNav: EventEmitter<boolean> = new EventEmitter();

  sideNavOpen: boolean = false;
  username: string = "guest";
  sponsorshipLink = '';

  constructor(private db: FirestoreService) { }


  ngOnInit() {
    this.sponsorshipLink = environment.sponsorshipLink;
  }

  sidenavToggle(event: Event) {
    this.sideNavOpen = !this.sideNavOpen;
    this.toggleSideNav.emit(this.sideNavOpen);
  }

  onSubmitSignup(form: NgForm) {
    const value = form.value;

    // Get the users email
    this.db.createNewletterSub('anonymous', value.email, 'subscriber');

    // Reset form
    form.resetForm();

  }

}
