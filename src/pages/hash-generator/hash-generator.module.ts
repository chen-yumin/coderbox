import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HashGeneratorPage } from './hash-generator';

@NgModule({
  declarations: [
    HashGeneratorPage
  ],
  imports: [
    IonicPageModule.forChild(HashGeneratorPage)
  ],
  entryComponents: [
    HashGeneratorPage
  ]
})
export class EpochConverterModule {}
