/**
 * Abstract class Operation.
 * @param _list It is a list of numbers
 */
export abstract class Operation {
  _list: number[];

  constructor(list: number[]) {
    this._list = list;
  }

  /**
   * Reduce method. Given an array, it reduce to an unique number
   * @param acc Accumulable number
   * @param curr Current number
   */
  abstract reduce(acc: number, curr: number): number;
  map(func: (x: number) => number) {}
  filter(func: (x: number) => boolean) {}
}
