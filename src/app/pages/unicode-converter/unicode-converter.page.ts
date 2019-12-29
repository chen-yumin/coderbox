import { Component, NgZone, ViewChildren, QueryList } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-unicode-converter',
  templateUrl: './unicode-converter.page.html',
  styleUrls: ['./unicode-converter.page.scss']
})
export class UnicodeConverterPage {
  charsLength: number = 0;
  utf8hex: string = '';
  utf8hexX: string = '';
  utf8dec: string = '';
  utf16hex: string = '';
  utf16hexU: string = '';
  utf16dec: string = '';
  utf32hex: string = '';
  utf32hexU: string = '';
  utf32dec: string = '';
  uri: string = '';
  uriFull: string = '';

  @ViewChildren('autosize') autosize: QueryList<CdkTextareaAutosize>;

  constructor(private _ngZone: NgZone) {}

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.autosize.forEach(item => item.resizeToFitContent(true));
    });
  }

  onInputMessage(inputEvent): void {
    const message = inputEvent.target.value;
    this.conversionUpdate(message);
  }

  conversionUpdate(str: string): void {
    if (!str.length) {
      this.resetOutput();
      return;
    }
    const charArray = Array.from(str);
    this.charsLength = charArray.length;

    // For UTF-32 Output
    const utf32 = new Uint32Array(
      new ArrayBuffer(charArray.length * 4)
    ).map((value, index) => charArray[index].codePointAt(0));
    this.utf32hex = Array.from(utf32)
      .map(b =>
        b
          .toString(16)
          .padStart(8, '0')
          .toUpperCase()
      )
      .join(' ');
    const utf32hex = Array.from(utf32).map(b =>
      b
        .toString(16)
        .padStart(2, '0')
        .toUpperCase()
    );
    this.utf32hexU = '\\u{' + utf32hex.join('}\\u{') + '}';
    this.utf32dec = utf32.toString();

    // For UTF-16 Output
    const utf16 = new Uint16Array(
      new ArrayBuffer(str.length * 2)
    ).map((value, index) => str.charCodeAt(index));
    const utf16hex = Array.from(utf16).map(b =>
      b
        .toString(16)
        .padStart(4, '0')
        .toUpperCase()
    );
    this.utf16hex = utf16hex.join(' ');
    this.utf16hexU = '\\u' + utf16hex.join('\\u');
    this.utf16dec = utf16.toString();

    // For UTF-8 Output
    const utf8 = new TextEncoder().encode(str);
    const utf8hex = Array.from(utf8).map(b =>
      b
        .toString(16)
        .padStart(2, '0')
        .toUpperCase()
    );
    this.utf8hex = utf8hex.join(' ');
    this.utf8hexX = '\\x' + utf8hex.join('\\x');
    this.utf8dec = utf8.toString();

    // For URI Encoding Output
    this.uri = encodeURI(str);
    this.uriFull = '%' + utf8hex.join('%');

    // Trigger resize
    this.triggerResize();
  }

  resetOutput() {
    this.charsLength = 0;
    this.utf8hex = '';
    this.utf8hexX = '';
    this.utf8dec = '';
    this.utf16hex = '';
    this.utf16hexU = '';
    this.utf16dec = '';
    this.utf32hex = '';
    this.utf32hexU = '';
    this.utf32dec = '';
    this.uri = '';
    this.uriFull = '';
  }
}
