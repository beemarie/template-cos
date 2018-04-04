// shows how to handle a Web FORM only allows POST

function main({ bucket = 'belinda-bucket', key = 'my-test-file.txt', body = 'This is the body of a file.', __ow_method: method }) {
  //Functions have access to http request properties
  // __ow_method
  // __ow_headers
  // __ow_path
  // __ow_query (when http-raw)
  // __ow_body  (when http-raw or not JSON)
  if (method !== 'post') {
    return { statusCode: 405, body:'Method Not allow, Only POST' };
  }

  return {
        'Bucket': bucket,
        'Key': key,
        'Body':body
  };
}

exports.main = main;
