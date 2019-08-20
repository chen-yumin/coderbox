import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private focusMonitor: FocusMonitor
  ) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.focusMonitor.focusVia(this.el, 'program', {
        preventScroll: true
      });
    }, 0);
  }

}
