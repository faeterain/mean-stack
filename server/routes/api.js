const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const secret = require('../../secret/secret');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rateme');


/* GET api listing. */
router.get('/', (req, res) => {
  res.send({'api works':'api'});
});


/* GET all users. */
router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.status(500).send(error)

    res.status(200).json(users);
  });
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
  User.findById(req.param.id, (err, users) => {
    if (err) res.status(500).send(error)

    res.status(200).json(users);
  });
});

/* Create a user. */
router.post('/users', (req, res) => {
  let user = new User({
    name: req.body.name,
    age: req.body.age
  });

  user.save(error => {
    if (error) res.status(500).send(error);

    res.status(201).json({
      message: 'User created successfully'
    });
  });
});




// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
  .then(posts => {
  res.status(200).json(posts.data);
})
.catch(error => {
  res.status(500).send(error)
});
});


module.exports = router;
