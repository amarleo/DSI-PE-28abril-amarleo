import {Operation} from './operation';

/**
 * FilterMapSubReduce Class
 */
export class FilterMapSubReduce extends Operation {
  constructor(_list: number[]) {
    super(_list);
  }

  /**
   * Reduce method. Given an array, it reduce to an unique number by the substract of them
   * @param acc Accumulable number
   * @param curr Current number
   */
  reduce(acc: number = 0, curr: number = 0): number {
    acc = 0;
    this._list.forEach((value: number) => {
      curr = value;
      acc -= curr;
    });
    return acc;
  }

  /**
   * Map method. Given a function, it returns a list
   * @param func function by param
   */
  map(func: (x: number) => number): number[] {
    let result: number [] = [];
    this._list.forEach((value: number) => {
      result.push(func(value));
    });
    return result;
  }


  /**
   * Filter method. Given a function, it returns a list
   * @param func function by param
   */
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
