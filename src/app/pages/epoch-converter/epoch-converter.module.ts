import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { EpochConverterPage } from './epoch-converter.page';

@NgModule({
  declarations: [EpochConverterPage],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EpochConverterPage
      }
    ])
  ]
})
export class EpochConverterModule { }
