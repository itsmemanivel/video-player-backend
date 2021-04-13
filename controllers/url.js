const { Url } = require('../models');
var mongodb = require("mongodb");
var ObjectID = require('mongodb').ObjectID;


const urlController = {

    /*
     :::: ADD URLS ::::
    */
     add(req, res, next){ 
        const url = new Url(req.body);
        console.log(req.body);
        url.save(function(err, data){
            if (err) {
                res.json({msg : 'Failed!'});
            } else {
                res.json({msg : 'Created Successfully!', data : data});
            }
        })
    },

    /*
     :::: GET ALL URLS ::::
    */
    async index(req, res){
        const urls = await Url.find((err, data)=>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.send(data);
            }
        });
    },
}


module.exports = urlController;
