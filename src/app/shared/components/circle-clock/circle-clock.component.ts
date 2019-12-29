import {
  Component,
  Input,
  ViewChild,
  HostBinding,
  HostListener,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-circle-clock',
  templateUrl: './circle-clock.component.html',
  styleUrls: ['./circle-clock.component.scss'],
  providers: [MatRipple]
})
export class CircleClockComponent implements AfterViewInit {
  private _unit: string;
  private _timestamp: number;
  @Input('timestamp')
  set timestamp(value: number) {
    this._timestamp = value;
    this.updateSecondHand();
  }
  @Input('unit')
  set unit(value: string) {
    this._unit = value;
    this.seconds = value == 'seconds';
    this.milliseconds = value == 'milliseconds';
  }
  @ViewChild('secondHand', { static: false }) public secondElem: ElementRef;
  @ViewChild('content', { static: false }) public contentElem: ElementRef;
  @HostBinding('class.seconds') seconds: boolean = false;
  @HostBinding('class.milliseconds') milliseconds: boolean = false;
  @HostListener('mousedown', ['$event']) onMousedown(event: MouseEvent) {
    this.ripple.launch(event.x, event.y);
  }
  @HostListener('mouseup', ['$event']) onMouseup(event: MouseEvent) {
    const text: string = this.contentElem.nativeElement.innerHTML.trim();
    this.copyTextToClipboard(text);
  }

  constructor(private ripple: MatRipple) {}

  ngAfterViewInit() {
    this.updateSecondHand();
  }

  get timestamp(): number {
    return this._timestamp;
  }

  get unit(): string {
    return this._unit;
  }

  updateSecondHand(): void {
    if (!this.secondElem) return;
    const secondAngle = (Math.round(this._timestamp / 1000) % 60) * 6;
    this.secondElem.nativeElement.style.transform =
      'rotateZ(' + secondAngle + 'deg)';
  }

  copyTextToClipboard(text: string): void {
    const elem = document.createElement('input');
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
  }

  round(value: number): number {
    return Math.round(value);
  }
}
