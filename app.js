/**
 * Main app module
 */

// Load dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

// Initiate express application
const app = express();

// view engine setup
app.set('view engine', 'ejs');

// Set up body-parser to parse request body. Used for form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount routes
app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require('./routes'));

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    if (!err.status || err.status !== 404) {
      console.log(err);
    }
    res.render('error', {
      message: err.message
    });
  });


/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port);
server.on('listening', () => {
console.log('Listening on port ' + port);
});
