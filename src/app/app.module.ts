import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Services

import {ListWishesService} from './services/list-wishes.service';


//Imports
import {WishesComponent} from '../pages/wishes/wishes.component';
import {GoalsComponent} from '../pages/goals/goals.component';
import {AddComponent} from '../pages/add/add.component';

@NgModule({
  declarations: [
    MyApp,
    GoalsComponent,
    TabsPage,
    WishesComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoalsComponent,
    TabsPage,
    WishesComponent,
    AddComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListWishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
