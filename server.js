/* Backend Framework */
const express = require('express');
/* Interact with Monogoo Database */
const mongoose = require('mongoose');
const assert = require('assert');

/* Allow us to get data from request */
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/key').mongoURI;

// Connect to Mongo
mongoose
  .connect(db) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Use Routes
app.use('/api/user', require('./routes/api/user'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ${port}'));