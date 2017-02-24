'use strict';

const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

var server = http.createServer(app);
var port = process.env.PORT || 8088;
server.listen(port, () => {
  console.log('Server runing port: 8088');
});
