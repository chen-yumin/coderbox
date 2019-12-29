import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-input-copy-button',
  templateUrl: './input-copy-button.component.html',
  styleUrls: ['./input-copy-button.component.scss']
})
export class InputCopyButtonComponent implements AfterViewInit {
  @Input('inputElement') inputElement: HTMLInputElement;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (!this.inputElement) {
      this.inputElement = this.el.nativeElement.parentElement.parentElement.querySelector(
        '.mat-input-element'
      );
    }
  }

  copyToClipboard(): void {
    this.inputElement.select();
    document.execCommand('copy');
  }
}
