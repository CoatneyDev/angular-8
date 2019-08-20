import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[coatneydevDynamicData]'
})
export class DynamicDataDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
