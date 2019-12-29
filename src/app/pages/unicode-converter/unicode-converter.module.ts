import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UnicodeConverterPage } from './unicode-converter.page';

@NgModule({
  declarations: [UnicodeConverterPage],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UnicodeConverterPage
      }
    ])
  ]
})
export class UnicodeConverterModule {}
