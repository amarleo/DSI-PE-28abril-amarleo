import * as fs from 'fs';

export class FileManager {
  _command: string;
  _filePath: string;
  constructor(command: string, filePath: string) {
    this._command = command;
    this._filePath = filePath;
  }

  set command(value: string) {
    this._command = value;
  }

  get command(): string {
    return this._command;
  }

  set filePath(value: string) {
    this._filePath = value;
  }

  get filePath(): string {
    return this._filePath;
  }

  watchFile() {
    if (fs.existsSync(this._filePath)) {
      fs.watch(this._filePath, (event, filename) => {
        console.log(`\nThe file ${filename} was modified!`);
        console.log(`\nThe type of change was: ${event}`);
      });
    } else {
      console.log(`\nFile not found`);
    }
  }
}

const example = new FileManager('', './src/hello.txt');
example.watchFile();
