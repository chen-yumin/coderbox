import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HashGeneratorPage } from './hash-generator';
import { ElasticModule } from 'angular2-elastic';

@NgModule({
  declarations: [
    HashGeneratorPage
  ],
  imports: [
    IonicPageModule.forChild(HashGeneratorPage),
    ElasticModule
  ],
  entryComponents: [
    HashGeneratorPage
  ]
})
export class EpochConverterModule {}
