const express = require('express');

const { resolve } = require('path');

const app = express()
const host = '0.0.0.0';
app.use('/',
  express.static(
    resolve(
      __dirname,
      '.build'
    )
  )
)

app.listen(host, process.env.PORT || 6000, (err) => {
  if(err) {
    return console.log(err)
  }
})