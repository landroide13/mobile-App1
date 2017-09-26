import { Injectable } from '@angular/core';
import {List} from '../class/list';

@Injectable()
export class ListWishesService {

  lists:List[] = [];

  constructor() {
    console.log("Service Runnning..");

    // let list1 = new List('PushUps');
    // let list2 = new List('Squats');
    // let list3 = new List('Planks');
    //
    // this.lists.push(list1);
    // this.lists.push(list2);
    // this.lists.push(list3);
    this.loadData();
  }

  updateData(){
    localStorage.setItem("data", JSON.stringify(this.lists))
  }

  loadData(){
    if(localStorage.getItem("data")){
    this.lists = JSON.parse(localStorage.getItem("data"));
    }
  }

  addList(list:List){
    this.lists.push(list);
    this.updateData();
  }

}
