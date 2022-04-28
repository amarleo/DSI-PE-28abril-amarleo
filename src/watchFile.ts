import * as fs from 'fs';
import {spawn} from 'child_process';

/**
 * Watch class method
 */
export class WatchFile {
  _filename: string;

  /**
   * watch file constructor
   * @param filename file name
   */
  constructor(filename: string) {
    this._filename = filename;
  }

  /**
   * get file name
   */
  get filename(): string {
    return this._filename;
  }

  /**
   * set file name
   */
  set filename(value: string) {
    this._filename = value;
  }

  /**
   * watch method
   */
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
