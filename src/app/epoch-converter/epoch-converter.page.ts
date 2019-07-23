import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-epoch-converter',
  templateUrl: './epoch-converter.page.html',
  styleUrls: ['./epoch-converter.page.scss'],
})
export class EpochConverterPage implements OnInit {
  epochTime: number;
  isoTimeString: string;
  dateString: string;
  currentTime$: Observable<{
    seconds: number,
    date: string,
    time: string
  }>;

  constructor() {
    this.currentTime$ = timer(0, 1000)
      .pipe(
        map(() => {
          const date = new Date();
          return {
            seconds: Math.round(date.getTime() / 1000.0),
            date: date.toLocaleDateString('en', {
              "day": "numeric",
              "month": "long",
              "year": "numeric"
            }),
            time: date.toString().split(' ')
              .slice(4).join(' ')
          };
        })
      );
    this.epochTime = Math.round(new Date().getTime() / 1000.0);
    this.updateTime();
  }

  ngOnInit() {
  }

  updateTime(): void {
    const date = new Date(this.epochTime > 500000000000 ? this.epochTime * 1.0 :
      this.epochTime * 1000);
    this.isoTimeString = date.toISOString();
    this.dateString = date.toString();
  }

  onChangeIsoTime(): void {
    this.epochTime = Math.round(new Date(this.isoTimeString).getTime() / 1000.0);
    this.updateTime();
  }

  onChangeDateString(): void {
    let time = Math.round(new Date(this.dateString).getTime() / 1000.0);
    this.epochTime = time ? time : this.epochTime;
    this.updateTime()
  }
}
