import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-file-uploader',
  template: ``,
  styles: []
})
export class FileUploaderComponent implements OnInit {

  @Input() worker: Worker;

  ngOnInit(): void {
    // Handles the message received from the web worker thread
    this.worker.onmessage = ({ data }) => {
      console.log(`Main thread receives message from web worker thread: ${data}`);
    };
    // Send a message to the web worker thread
    this.worker.postMessage('hello');
  }

}
