import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../../app.reducer';
import { AuthenticationService } from '../../../../modules/authentication/authentication.service';

@Component({
  selector: 'coatneydev-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() toggleSideNav: EventEmitter<boolean> = new EventEmitter();
  isAuth$: Observable<boolean>;

  constructor(
    private authService: AuthenticationService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
  }

  onLogout(event: Event) {
    this.onCloseNav(event);
    this.authService.logout();
  }

  onCloseNav(event: Event) {
    this.toggleSideNav.emit(false);
  }

}
