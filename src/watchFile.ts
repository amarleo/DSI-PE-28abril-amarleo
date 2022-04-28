import * as fs from 'fs';
import {spawn} from 'child_process';

export class WatchFile {
  _filename: string;

  constructor(filename: string) {
    this._filename = filename;
  }

  get filename(): string {
    return this._filename;
  }

  set filename(value: string) {
    this._filename = value;
  }

  toWatch() {
    fs.watch(this._filename, (eventType, filename) => {
      console.log(`\nFile ${filename} was modified`);
      const add = spawn('node', ['', `dist/add.js ${this._filename}`]);
      add.stdout.on('data', (value) => console.log(value));

      // add.on('close', () => {
      //   console.log(addOutput);
      // });
    });
  }
}

const watcher = new WatchFile('./inputs/sumList.txt');
watcher.toWatch();
