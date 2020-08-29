import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-lib-file-uploader',
  template: ``,
  styles: []
})
export class LibFileUploaderComponent implements OnInit {

  worker: Worker;

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new web worker
      // So far this workaround works only with the static file path to the worker
      this.worker = new Worker('assets/file-uploader-worker.js');

      // Handles the message received from the web worker thread
      this.worker.onmessage = ({ data }) => {
        console.log(`In service:onmessage: page got message: ${data}`);
      };
      // Send a message to the web worker thread
      this.worker.postMessage('hello');
    }
  }

}
