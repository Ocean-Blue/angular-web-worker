/// <reference lib="webworker" />

import {sendFileChunk} from '../../projects/lib-file-uploader/src/lib/file-uploader-worker';

addEventListener('message', ({ data }) => {
  const response = `${sendFileChunk(data)};; worker response to ${data}`;
  console.log(`worker response to ${data}`);
  postMessage(response);
});
