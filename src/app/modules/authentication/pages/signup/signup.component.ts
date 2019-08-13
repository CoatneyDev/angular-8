import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthenticationService } from '../../authentication.service';
import * as fromRoot from '../../../../app.reducer';

@Component({
  selector: 'coatneydev-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  startDate: Date;
  isLoading$: Observable<boolean>;

  constructor(
    private authService: AuthenticationService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getIsLoading);
    this.setStartDate();
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser(
      {
        email: form.value.email,
        password: form.value.password
      }
    );
  }

  private setStartDate() {
    this.startDate = new Date();
    this.startDate.setFullYear(this.startDate.getFullYear() - 18);
  }
}
