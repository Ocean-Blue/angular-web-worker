
// tslint:disable-next-line:typedef
export function sendFile(data: MessageEvent) {
  const response = `uploader worker response to ${data}`;
  // Do your logic here but do not postMessage, just return the message
  return response;
}

