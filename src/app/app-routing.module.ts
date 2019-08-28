import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
    pathMatch: 'full',
    data: {
      meta: [
        {
          name: 'description',
          content: 'Dev tools made by developers for developers to make your day to day dev life easier. Free and Open Source.'
        }
      ]
    }
  },
  {
    path: 'hash-generator',
    loadChildren: () => import('./pages/hash-generator/hash-generator.module').then(mod => mod.HashGeneratorModule),
    data: {
      title: 'Hash Generator',
      meta: [
        {
          name: 'description',
          content: 'Generate cryptographic hash codes from a message or file. It supports most used common hash algorithms, such as SHA-1, SHA-256, SHA-384, SHA-512.'
        }
      ]
    }
  },
  {
    path: 'epoch-converter',
    loadChildren: () => import('./pages/epoch-converter/epoch-converter.module').then(mod => mod.EpochConverterModule),
    data: {
      title: 'Epoch Time Converter',
      meta: [
        {
          name: 'description',
          content: 'Convert Epoch and Unix timestamp to human readable time, local time, ISO time format, and vice versa. Timestamp Converter for developers.'
        }
      ]
    }
  },
  {
    path: 'unicode-converter',
    loadChildren: () => import('./pages/unicode-converter/unicode-converter.module').then(mod => mod.UnicodeConverterModule),
    data: {
      title: 'Unicode Converter',
      meta: [
        {
          name: 'description',
          content: 'Text processing tool to encode your text and convert it to UTF-8, UTF-16 and UTF-32 and get their various representation formats.'
        }
      ]
    }
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
