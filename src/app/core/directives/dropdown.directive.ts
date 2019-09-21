import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[coatneydevDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.is-active') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
