const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/user_data');

//fetch data from database
router.get('/', (req, res) => {
  User.find()
  .then(user => res.json(user))
  });

router.post('/', (req, res) => {
  const newUser= new User({
	first_name: req.body.first_name,
	last_name: req.body.last_name,
	major: req.body.major,
	university: req.body.university,
	file: req.body.file
  })
  newUser.save().then(user => res.json(user));
});
  
  
module.exports = router;