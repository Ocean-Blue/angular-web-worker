import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-worker-test';

  worker: Worker;

  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new web worker
      this.worker = new Worker('./app.worker', {type: 'module'});
    }
  }
}
