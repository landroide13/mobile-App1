import { Component, OnInit } from '@angular/core';
import {ListWishesService} from '../../app/services/list-wishes.service';
import {NavController} from 'ionic-angular';

import {DetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.component.html',
})
export class GoalsComponent implements OnInit {

  constructor(private _listWishesService: ListWishesService,
              private navCtr: NavController  ) {  }

  ngOnInit() {}

  goDetail(list, ind){
    this.navCtr.push(DetailsComponent, {list,ind});
  }
}
