import { Component, OnInit } from '@angular/core';
import { List } from '../../app/class/list';
import {ListItem} from '../../app/class/list-item';
import { AlertController, NavController } from 'ionic-angular';
import {ListWishesService} from '../../app/services/list-wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  nameList:string = "";
  nameItem:string = "";

  items:ListItem[] = [];

  constructor( public _listWishesService: ListWishesService,
               public navCtr: NavController,
               public alertCtr: AlertController ) {  }

  ngOnInit() {}

  add(){
    if(this.nameItem.length == 0){
      return;
    }

    let item = new ListItem();
    item.name = this.nameItem;

    this.items.push(item);
    this.nameItem = "";

  }

  delete(i:number){
    this.items.splice(i, 1);
  }

  saveList(){
    if(this.nameList.length == 0){
      let alert = this.alertCtr.create({
      title: 'Name List',
      subTitle: "List's name its mandatory ",
      buttons: ['OK']
      });
    alert.present();
    return;
    }

    let list = new List(this.nameList);
    list.items = this.items;

    this._listWishesService.lists.push(list);
    this.navCtr.pop();


    }


  }
