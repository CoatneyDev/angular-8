import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'coatneydev-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() toggleSideNav: EventEmitter<boolean> = new EventEmitter();
  isAuth$: Observable<boolean>;

  constructor(

  ) { }

  ngOnInit() {
  }


  onCloseNav(event: Event) {
    this.toggleSideNav.emit(false);
  }

}
