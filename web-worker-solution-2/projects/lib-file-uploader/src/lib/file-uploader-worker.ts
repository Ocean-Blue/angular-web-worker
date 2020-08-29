
// tslint:disable-next-line:typedef
export function sendFileChunk(data: MessageEvent) {
  console.log(`file uploader worker response to ${data}`);
  const response = `file uploader worker response to ${data}`;
  // Do your logics  here but do not postMessage, just return the message
  return response;
  // postMessage(response);
}

