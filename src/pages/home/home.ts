import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EpochConverterPage } from '../epoch-converter/epoch-converter';
import { FloatConverterPage } from '../float-converter/float-converter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  epochConverter = EpochConverterPage;
  floatConverter = FloatConverterPage;

  constructor(public navCtrl: NavController) {

  }

}
