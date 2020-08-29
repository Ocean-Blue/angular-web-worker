
sendFileChunk = function(data) {
  console.log(`worker 3 response to ${JSON.stringify(data)}`);
  const response = `worker 3 response to ${JSON.stringify(data)}`;
  // Do your logic here but do not postMessage, just return the message
  return response;
};
