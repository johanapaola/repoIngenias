const http = require('http');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3008;
const routes = require('./api/routes/index');

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.listen(PORT, () => {
    console.log('%s listening at 3008'); // eslint-disable-line no-console
  });
