import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[coatneydevStopClickPropagation]'
})
export class StopClickPropagationDirective {

  constructor() { }

  @HostListener("click", ["$event"]) public onClick(event: any): boolean { event.stopPropagation(); return false; }

  @HostListener("mousedown", ["$event"]) public onMousedown(event: any): boolean { event.stopPropagation(); return false; }
}

