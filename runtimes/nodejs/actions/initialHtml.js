var fs = require('fs');

function main(args) {
  return html(
    `<html>
      <body>
        <!-- Simple form which will send a POST request -->
        <form action="./my-template-sequence" method="post">
          <label for="POST-bucket">COS Bucket Name:</label>
          <br>
          <input id="POST-bucket" type="text" name="bucket" required>
          <br>
          <label for="POST-key">File name:</label>
          <br>
          <input id="POST-key" type="text" name="key" required>
          <br>
          <label for="POST-body">Body of the file:</label>
          <br>
          <input id="POST-body" type="textarea" name="body" required>
          <br>
          <input type="submit">
        </form>
      </body>
    </html>`
  )
}

function html(html) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age=300'
    },
    body: html
  };
}
exports.main = main;
