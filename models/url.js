const mongoose = require('mongoose');

const urlModel = mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }

});

module.exports = mongoose.model('url', urlModel);