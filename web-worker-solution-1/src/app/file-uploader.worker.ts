/// <reference lib="webworker" />

import {sendFile} from '../../projects/lib-file-uploader/src/lib/file-uploader-worker';

addEventListener('message', ({ data }) => {
  // Get the message from the file that has web worker logic and postMessage here
  const response = sendFile(data);
  postMessage(response);
});
