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

  map(func: (x: number) => number): number[] {
    let result: number [] = [];
    this._list.forEach((value: number) => {
      result.push(func(value));
    });
    return result;
  }

  filter(func: (x:number) => boolean): number[] {
    let result: number[] = [];
    this._list.forEach((value: number) => {
      if (func(value)) {
        result.push(value);
      }
    });
    return result;
  }
}
