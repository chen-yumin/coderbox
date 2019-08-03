import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-epoch-converter',
  templateUrl: './epoch-converter.page.html',
  styleUrls: ['./epoch-converter.page.scss'],
})
export class EpochConverterPage implements OnInit {
  timestampInSeconds: number;
  timestampInMilliseconds: number;
  isoTimeString: string;
  dateString: string;
  currentTime$: Observable<{
    timestamp: number,
    date: string,
    time: string
  }>;

  constructor() {
    this.currentTime$ = timer(0, 1000)
      .pipe(
        map(() => {
          const date = new Date();
          return {
            timestamp: date.getTime(),
            date: date.toLocaleDateString('en', {
              "day": "numeric",
              "month": "long",
              "year": "numeric"
            }),
            time: date.toString().split(' ').slice(4).join(' ')
          };
        })
      );
  }

  ngOnInit() {
    this.updateTime(new Date());
  }

  updateTime(datetime: Date): void {
    if (!datetime || isNaN(datetime.getTime())) return;
    this.timestampInMilliseconds = datetime.getTime();
    this.timestampInSeconds = Math.round(this.timestampInMilliseconds / 1000.0);
    this.isoTimeString = datetime.toISOString();
    this.dateString = datetime.toString();
  }

  onInputTime(value: number): void {
    this.updateTime(new Date(Number(value)));
  }

  onChangeIsoTime(value: string): void {
    this.updateTime(new Date(value));
  }

  onChangeDateString(value: string): void {
    this.updateTime(new Date(value));
  }
}
