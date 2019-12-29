import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HashGeneratorPage } from './hash-generator.page';

@NgModule({
  declarations: [HashGeneratorPage],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HashGeneratorPage
      }
    ])
  ]
})
export class HashGeneratorModule {}
