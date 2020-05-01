const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');

const app = express();
const server = http.createServer(app);

app.use('/', express.static(`${__dirname}/../client`));

server.listen(5000, () => {
  socket(server);
  console.log('Server is listening at :', 5000);
});
