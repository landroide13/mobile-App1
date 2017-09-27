import { Component, OnInit } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {ListItem} from '../../app/class/list-item';
import {List} from '../../app/class/list';
import {ListWishesService} from '../../app/services/list-wishes.service';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
})
export class DetailsComponent implements OnInit {

  ind:number;
  list:List;

  constructor(public navCtr: NavController,
              public navPa: NavParams,
              public alertCtr: AlertController,
              public _listWishesService: ListWishesService ) {

                // console.log(this.navPa);
                this.ind = this.navPa.get("ind");
                this.list = this.navPa.get("list");


               }

  ngOnInit() {}

  update(item:ListItem){
    item.acomplish = !item.acomplish;

    let allChecked = true;

    for(let item of this.list.items){
      if(!item.acomplish){
        allChecked = false;
        break;
      }
    }

    this.list.finished = allChecked;

    this._listWishesService.updateData();
  }

  deleteList(){
    let confirm = this.alertCtr.create({
     title: this.list.name,
     message: 'Are you sure ??',
     buttons: ['Cancel',
       {
         text: 'Delete',
         handler: () => {
          //  console.log('Agree clicked');
          this._listWishesService.deleteList(this.ind);
          this.navCtr.pop();
         }
       }
     ]
   });
   confirm.present();
 }


}
