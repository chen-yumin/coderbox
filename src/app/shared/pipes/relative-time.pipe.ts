import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  transform(timestamp: number, relativeToTimestamp?: number): string {
    if (!Intl.RelativeTimeFormat) return '';
    if (isNaN(relativeToTimestamp)) {
      relativeToTimestamp = new Date().getTime();
    }

    const rtf = new Intl.RelativeTimeFormat();

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const diff = timestamp - relativeToTimestamp;
    const absDiff = Math.abs(diff);

    if (absDiff < msPerMinute) {
      return rtf.format(Math.round(diff / 1000), 'second');
    } else if (absDiff < msPerHour) {
      return rtf.format(Math.round(diff / msPerMinute), 'minute');
    } else if (absDiff < msPerDay) {
      return rtf.format(Math.round(diff / msPerHour), 'hour');
    } else if (absDiff < msPerMonth) {
      return rtf.format(Math.round(diff / msPerDay), 'day');
    } else if (absDiff < msPerYear) {
      return rtf.format(Math.round(diff / msPerMonth), 'month');
    } else {
      return rtf.format(Math.round(diff / msPerYear), 'year');
    }
  }
}

declare namespace Intl {
  const RelativeTimeFormat: any; // Workaround for https://github.com/Microsoft/TypeScript/issues/29129
}
