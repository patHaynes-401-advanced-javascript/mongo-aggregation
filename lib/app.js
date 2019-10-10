const express = require('express');
const app = express();
// Load model plugins
require('./models/register-plugins');

// MIDDLEWARE
const morgan = require('morgan');
const checkConnection = require('./middleware/check-connection');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(checkConnection);

// IS ALIVE TEST
app.get('/hello', (req, res) => res.send('world'));

// API ROUTES
const auth = require('./routes/auth');
app.use('/api/auth', auth);
const zip = require('./routes/zipRoute');
app.use('/api/zipRoute', zip);
const student = require('./routes/studentRoute');
app.use('/api/studentRoute', student);
const trade = require('./routes/tradeRoute');
app.use('/api/tradeRoute', trade);
const grade = require('./routes/gradeRoute');
app.use('/api/gradeRoute', grade);
const book = require('./routes/bookRoute');
app.use('/api/bookRoute', book);


// NOT FOUND
const api404 = require('./middleware/api-404');
app.use('/api', api404);
// using express default 404 for non-api routes

// ERRORS
const errorHandler = require('./middleware/error-handler');
app.use(errorHandler);

module.exports = app;