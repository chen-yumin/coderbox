import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EpochConverterPage } from '../epoch-converter/epoch-converter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  epochConverter = EpochConverterPage;

  constructor(public navCtrl: NavController) {

  }

}
