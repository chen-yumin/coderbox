import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CoderBox } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ElasticModule } from 'angular2-elastic';


@NgModule({
  declarations: [
    CoderBox,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CoderBox),
    ElasticModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CoderBox,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
