import { Component } from '@angular/core';

import { environment } from '../environments/environment';
import { AuthenticationService } from './modules/authentication/authentication.service';

@Component({
  selector: 'coatneydev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.title;

  constructor(private authService: AuthenticationService) {
    this.authService.initAuthListener();
  }
}
