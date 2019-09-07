import { Component, OnInit } from '@angular/core';

import { CoreModule } from '../../../../core/core.module';
import { EditProfileComponent } from '../../../profile/pages/edit-profile/edit-profile.component';

@Component({
  selector: 'coatneydev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit() {
  }

}
