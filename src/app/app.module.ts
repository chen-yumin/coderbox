import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CoderBox } from './app.component';
import { HomePage } from '../pages/home/home';
import { EpochConverterPage } from '../pages/epoch-converter/epoch-converter';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    CoderBox,
    HomePage,
    EpochConverterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CoderBox),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CoderBox,
    HomePage,
    EpochConverterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
