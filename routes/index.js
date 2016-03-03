var express = require('express');
var router = express.Router();
var Stack = require('../models/stack');
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeReview' });
});

router.get('/api/study', function(req, res, next) {

    Stack.find( {  }, function(err, data) {
        if (err) console.log(err);
        // console.log(stacks);
        res.json(data);
    });

    // User.find({  }, function(err, data) {
    // if (err) console.log(err);
    //     res.json(data);
    //     console.log(user);
    // });

});

router.post('/user', function(req, res){

    Stack.create({
        topic: req.body.text,
        term: req.body.text,
        definition: req.body.text,
        user_id: req.user
    }, function(err, stack){
        if (err)
            res.send(err);

        Stack.find(function(err, stacks){
            if(err)
                res.send(err)
            res.json(stacks);
        });
    });
});

module.exports = router;
