import { Component } from '@angular/core';

import { WishesComponent } from '../wishes/wishes.component';
import {GoalsComponent} from '../goals/goals.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WishesComponent;
  tab2Root = GoalsComponent;

  constructor() {

  }
}
