var express = require('express');
var router = express.Router();

var Stack = require('../models/stack');
var User = require('../models/user');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeReview' });

    // Stack.find( { 'topic': 'html' }, 'cards term definition topic', function(err, stacks) {
    // if (err) console.log(err);
    // console.log(stacks);
    // });

    // User.find({  }, 'email', function(err, users) {
    // if (err) console.log(err);
    // console.log(users.local.email);
    // });

});

module.exports = router;
