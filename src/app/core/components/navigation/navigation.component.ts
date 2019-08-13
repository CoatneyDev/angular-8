import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coatneydev-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav(isOpen: boolean) {
    this.isOpened = isOpen;
  }

}
