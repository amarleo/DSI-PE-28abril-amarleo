import * as fs from 'fs';

export class Add {
  _fileName: string;
  _data: string = '';
  _result: number = 0;

  constructor(fileName: string) {
    this._fileName = fileName;
    this.fileData();
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(value: string) {
    this._fileName = value;
  }

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
    this.fileData();
  }

  get result(): number {
    return this._result;
  }

  fileData(): void {
    fs.readFile(this._fileName, (err, data) => {
      if (err) console.log('Error: File can not be read');
      else {
        this._data = data.toString();
        this._result = this.addData();
        console.log(this._result);
      }
    });
  }

  addData(): number {
    const splitData: string [] = this._data.split(' ');
    let result: number = 0;
    splitData.forEach((value: string) => {
      result += Number(value);
    });

    return result;
  }
}

const add = new Add('./inputs/sumList.txt');
