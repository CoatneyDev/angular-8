import { Component } from '@angular/core';

import { application } from 'src/app/configs/app.config';
import { AuthenticationService } from './modules/authentication/authentication.service';


@Component({
  selector: 'coatneydev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = application.title;

  constructor(private authService: AuthenticationService) {
    this.authService.initAuthListener();
  }


}
