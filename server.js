const express = require('express');

const { resolve } = require('path');

var port = process.env.PORT || 8000;
var host = process.env.YOUR_HOST || '0.0.0.0';

const app = express()
app.use('/',
  express.static(
    resolve(
      __dirname,
      '.build'
    )
  )
)

app.listen(port, host, (err) => {
  if(err) {
    return console.log(err)
  }
})