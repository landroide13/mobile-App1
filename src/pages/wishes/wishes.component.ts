import { Component, OnInit } from '@angular/core';
import {ListWishesService} from '../../app/services/list-wishes.service';
import {NavController} from 'ionic-angular';
import {AddComponent} from '../add/add.component';
import {DetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-wishes',
  templateUrl: 'wishes.component.html',
})
export class WishesComponent implements OnInit {

  constructor(private _listWishesService: ListWishesService,
              private navCtr: NavController  ) {  }

  ngOnInit() {}

  goAdd(){
    this.navCtr.push(AddComponent);
  }

  goDetail(list, ind){
    this.navCtr.push(DetailsComponent, {list,ind});
  }

}
