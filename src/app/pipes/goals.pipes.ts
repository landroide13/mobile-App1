import { Pipe, PipeTransform } from '@angular/core';
import {List} from '../class/list';

@Pipe({
  name: 'goals',
  pure:false
})
export class GoalsPipe implements PipeTransform {
  transform(Lists: List[], status:boolean = false): List[] {

    let newList:List[] = [];

    for(let list of Lists){
      if(list.finished == status){
        newList.push(list)
      }
    }

    return newList;
  }
}
