import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'epoch-converter',
  templateUrl: 'epoch-converter.html'
})
export class EpochConverterPage {
  epochTime: number;
  isoTimeString: string;

  constructor(public navCtrl: NavController) {
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
