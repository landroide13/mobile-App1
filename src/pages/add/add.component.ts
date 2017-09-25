import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  nameList:string;
  nameItem:string;

  constructor() {  }

  ngOnInit() {}
}
