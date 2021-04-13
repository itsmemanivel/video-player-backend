var express = require('express');
var app = express();

var port = process.env.port || 3000;
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var db = require('./config/db');
var mongoose = require('mongoose');

mongoose.connect(db.URI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
.then(()=>{
    console.log(':::::::::::: Connected to MongoDB ::::::::::::');
})
.catch((err) =>{
    console.log('err');
})
   
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(methodOverride());


//Headers
app.use( (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});


require('./routes')(app);

app.listen(port, '0.0.0.0', ()=>{
    console.log(`server on port ${port}`);
})