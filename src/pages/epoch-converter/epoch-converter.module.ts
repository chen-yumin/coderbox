import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EpochConverterPage } from './epoch-converter';

@NgModule({
  declarations: [
    EpochConverterPage
  ],
  imports: [
    IonicPageModule.forChild(EpochConverterPage)
  ],
  entryComponents: [
    EpochConverterPage
  ]
})
export class EpochConverterModule {}
