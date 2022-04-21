export abstract class Operation {
  _list: number[];

  constructor(list: number[]) {
    this._list = list;
  }

  abstract reduce(acc: number, curr: number): number;
  map() {}
  filter() {}
}
