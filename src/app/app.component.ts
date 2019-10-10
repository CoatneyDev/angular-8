import { Component } from '@angular/core';

import { application } from 'src/app/configs/app.config';

@Component({
  selector: 'coatneydev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = application.title;

}
