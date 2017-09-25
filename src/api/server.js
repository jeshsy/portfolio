const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const Comment = require('./commentModel.js');
const port = 8000;
const server = express();
const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'POST',
  preflightContinue: true,
  optionsSuccessStatus: 2204,
  credentials: true,
};
server.use(cors(corsOptions));
server.use(bodyParser.json());


server.post('/', (req, res) => {
  const { firstName, lastName, email, feedback } = req.body;
  if (!firstName) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Missing required firstName' });
    return;
  }
  if (!feedback) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Missing required comment' });
    return;
  }
  if (!email) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Missing email' });
    return;
  }
  const newComment = new Comment({ firstName, lastName, email, feedback });
  newComment.save((err) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'error' });
      return;
    }
    res.json(newComment);
  });
});


mongoose.Promise = global.Promise;
const connect = mongoose.connect(
    'mongodb://localhost/comment', 
    { useMongoClient: true }
);

connect.then(() => {
    server.listen(port);
    console.log(`Server listening on port ${port}`);
}, (err) => {
    console.log('\n**********************');
    console.log("ERROR: Failed to connect to MongoDB.");
    console.log('\n**********************');
});