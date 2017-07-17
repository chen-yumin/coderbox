import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'epoch-converter',
  templateUrl: 'epoch-converter.html'
})
export class EpochConverterPage {
  epochTime: number;
  humanReadableTime: string;

  constructor(public navCtrl: NavController) {
    this.epochTime = Math.round(new Date().getTime()/1000.0);
    this.humanReadableTime = new Date(this.epochTime * 1000).toString();
  }

}
