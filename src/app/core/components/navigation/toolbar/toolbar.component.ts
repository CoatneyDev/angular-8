import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../../app.reducer';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { ProfileService } from 'src/app/modules/profile/profile.service';

@Component({
  selector: 'coatneydev-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSideNav: EventEmitter<boolean> = new EventEmitter();
  isAuth$: Observable<boolean>;
  sideNavOpen: boolean = false;
  username: string;

  constructor(
    private store: Store<fromRoot.State>,
    private authService: AuthenticationService,
    private profile: ProfileService
  ) { }


  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);

    this.assignUserName();
  }

  assignUserName() {
    this.username = this.profile.name ? this.profile.name : "Guest";
  }

  sidenavToggle(event: Event) {
    this.sideNavOpen = !this.sideNavOpen;
    this.toggleSideNav.emit(this.sideNavOpen);
  }


  onLogout(event: Event) {
    this.authService.logout();
  }



}
