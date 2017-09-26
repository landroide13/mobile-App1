import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
})
export class DetailsComponent implements OnInit {

  ind:number;
  list:any;

  constructor(public navCtr: NavController,
              public navPa: NavParams) {

                // console.log(this.navPa);
                this.ind = this.navPa.get("ind");
                this.list = this.navPa.get("list");


               }

  ngOnInit() {}
}
