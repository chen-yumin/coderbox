import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloatConverterPage } from './float-converter';

@NgModule({
  declarations: [
    FloatConverterPage
  ],
  imports: [
    IonicPageModule.forChild(FloatConverterPage)
  ],
  entryComponents: [
    FloatConverterPage
  ]
})
export class FloatConverterModule {}
