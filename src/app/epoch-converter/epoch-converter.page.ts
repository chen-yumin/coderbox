import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-epoch-converter',
  templateUrl: './epoch-converter.page.html',
  styleUrls: ['./epoch-converter.page.scss'],
})
export class EpochConverterPage implements OnInit {
  currentSeconds: number;
  currentDateString: string;
  currentTimeString: string;
  epochTime: number;
  isoTimeString: string;
  dateString: string;

  constructor() {
    let timer$ = timer(0, 1000);
    timer$.subscribe(t => {
      let date = new Date();
      this.currentSeconds = Math.round(date.getTime()/1000.0);
      this.currentDateString = date.toLocaleDateString('en', {
        "day": "numeric",
        "month": "long",
        "year": "numeric"
      });
      this.currentTimeString = date.toString().split(' ')
        .slice(4).join(' ');
    });
    this.epochTime = Math.round(new Date().getTime()/1000.0);
    this.updateTime();
  }

  ngOnInit() {
  }

  updateTime() : void {
    const date = new Date(this.epochTime > 500000000000? this.epochTime * 1.0 :
      this.epochTime * 1000);
    this.isoTimeString = date.toISOString();
    this.dateString = date.toString();
  }

  onChangeIsoTime() : void {
    this.epochTime = Math.round(new Date(this.isoTimeString).getTime()/1000.0);
    this.updateTime();
  }

  onChangeDateString() : void {
    let time = Math.round(new Date(this.dateString).getTime()/1000.0);
    this.epochTime = time? time: this.epochTime;
    this.updateTime()
  }
}
