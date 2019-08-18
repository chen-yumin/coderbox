import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'hash-generator',
    loadChildren: './pages/hash-generator/hash-generator.module#HashGeneratorModule'
  },
  {
    path: 'epoch-converter',
    loadChildren: './pages/epoch-converter/epoch-converter.module#EpochConverterModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
