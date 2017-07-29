import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'float-converter',
  segment: 'float-converter'
})
@Component({
  selector: 'float-converter',
  templateUrl: 'float-converter.html'
})
export class FloatConverterPage {
  decimal: number;

  constructor(public navCtrl: NavController) {
  }

  updateDecimal() : void {
    
  }

}
