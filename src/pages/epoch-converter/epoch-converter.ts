import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'epoch-converter',
  templateUrl: 'epoch-converter.html'
})
export class EpochConverterPage {
  currentTime: number;
  epochTime: number;
  isoTimeString: string;

  constructor(public navCtrl: NavController) {
    let timer = Observable.timer(0, 1000);
    timer.subscribe(t => this.currentTime = Math.round(new Date().getTime()/1000.0));
    this.epochTime = Math.round(new Date().getTime()/1000.0);
    this.updateTime();
  }

  updateTime() : void {
    const date = new Date(this.epochTime * 1000);
    this.isoTimeString = date.toISOString();
  }

  onChangeIsoTime() : void {
    this.epochTime = Math.round(new Date(this.isoTimeString).getTime()/1000.0);
    this.updateTime();
  }

}
