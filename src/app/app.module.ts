import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//PipeTransform
import {PlaceHolderPipe} from './pipes/placeholder.pipe';

//Services

import {ListWishesService} from './services/list-wishes.service';


//Imports
import {WishesComponent} from '../pages/wishes/wishes.component';
import {GoalsComponent} from '../pages/goals/goals.component';
import {AddComponent} from '../pages/add/add.component';
import {DetailsComponent} from '../pages/details/details.component';

@NgModule({
  declarations: [
    MyApp,
    GoalsComponent,
    PlaceHolderPipe,
    TabsPage,
    WishesComponent,
    AddComponent,
    DetailsComponent
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
    AddComponent,
    DetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListWishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
