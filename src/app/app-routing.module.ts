import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
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
    loadChildren: './pages/hash-generator/hash-generator.module#HashGeneratorModule',
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
    loadChildren: './pages/epoch-converter/epoch-converter.module#EpochConverterModule',
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
    loadChildren: './pages/unicode-converter/unicode-converter.module#UnicodeConverterModule',
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
