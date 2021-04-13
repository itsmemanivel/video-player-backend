const express = require('express');
const { mongo } = require('mongoose');
const router = express.Router();
const path = require('path');
var { UrlController } = require('./controllers');


module.exports = (app) =>{

    // routes
    router.post('/add', UrlController.add );
    router.get('/get', UrlController.index);

    app.use('/api_v1', router);
    app.use('/',(req, res)=>{
        res.json({
            app: 'Great Manager Institute',
            database : 'mongoDB',
            github : 'https://github.com/DOOFIE-app'
        })
    })
}