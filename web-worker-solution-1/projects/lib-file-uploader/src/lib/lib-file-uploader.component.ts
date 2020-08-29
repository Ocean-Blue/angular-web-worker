import {Component, Inject, Input, OnInit} from '@angular/core';
// import {WEB_WORKER_RELATIVE_FILE_PATH} from './file-uploader-module-config.interface';

@Component({
  selector: 'lib-lib-file-uploader',
  template: ``,
  styles: []
})
export class LibFileUploaderComponent implements OnInit {

  // Passing in file path of the web worker script does not work
  // @Input() webWorkerRelFilePath: string;
  // webWorkerFilePath: string;

  worker: Worker;

  constructor(/*@Inject(WEB_WORKER_RELATIVE_FILE_PATH) filePath: string*/) {
    // this.webWorkerFilePath = filePath;
  }

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new web worker

      // Not a good solution because so far this workaround works only
      // with the static file path to the worker. If pass the file path by token
      // or inject, mimeType error is thrown
      this.worker = new Worker('../../../../src/app/file-uploader.worker', { type: 'module' });
      // this.worker = new Worker(this.webWorkerFilePath, { type: 'module' });
      // this.worker = new Worker(this.webWorkerRelFilePath, { type: 'module' });

      // Handles the message received from the web worker thread
      this.worker.onmessage = ({ data }) => {
        console.log(`In service:onmessage: page got message: ${data}`);
      };
      // Send a message to the web worker thread
      this.worker.postMessage('hello');
    }
  }

}
