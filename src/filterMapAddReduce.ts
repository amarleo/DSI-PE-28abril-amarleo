import {Operation} from './operation';

export class FilterMapAddReduce extends Operation {
  constructor(_list: number[]) {
    super(_list);
  }

  reduce(acc: number = 0, curr: number = 0): number {
    acc = 0;
    this._list.forEach((value: number) => {
      curr = value;
      acc += curr;
    });
    return acc;
  }
}

/*
la invocación de filter
filter(lista, (x: number) => {x > 10})
*/
