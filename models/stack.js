var mongoose = require('mongoose');

var stackSchema = mongoose.Schema({

    user_id        : Number,
    topic          : String,
    cards          : [{
        term       : String, 
        definition : String 
    }]

});

module.exports = mongoose.model('Stack', stackSchema);
