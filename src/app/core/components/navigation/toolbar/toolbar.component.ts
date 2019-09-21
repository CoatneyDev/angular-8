import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../../app.reducer';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { ProfileService } from 'src/app/modules/profile/profile.service';
import { Member } from 'src/app/core/models/member';

@Component({
  selector: 'coatneydev-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Output() memberChanged: Subscription;
  @Output() toggleSideNav: EventEmitter<boolean> = new EventEmitter();
  isAuth$: Observable<boolean>;
  sideNavOpen: boolean = false;
  username: string = "guest";

  constructor(
    private store: Store<fromRoot.State>,
    private authService: AuthenticationService,
    private profileService: ProfileService
  ) { }


  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);

    this.memberChanged = this.profileService.MemberUpdated.subscribe(
      (member: Member) => {
        this.username = member.user.name;

      }
    );

  }


  ngOnDestroy() {
    this.memberChanged.unsubscribe();
  }

  updateUsername(): string {

    return this.profileService.thisMember.user.name;
  }

  sidenavToggle(event: Event) {
    this.sideNavOpen = !this.sideNavOpen;
    this.toggleSideNav.emit(this.sideNavOpen);
  }


  onLogout(event: Event) {
    this.authService.logout();
  }

}
