import { Component, OnInit } from '@angular/core';
import { List } from '../../app/class/list';
import {ListItem} from '../../app/class/list-item'

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  nameList:string;
  nameItem:string = "";

  items:ListItem[] = [];

  constructor() {  }

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

}
