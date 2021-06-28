const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Postrouter = require('../server/routes/posts.routers')

const app = express();

mongoose.connect('mongodb://localhost:27017/bookStore',{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,});
const db = mongoose.connection;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use('/posts',Postrouter)

const port = 8080; 
app.listen(port,function(){
    console.log(`server is running on port ${port}`)
}) 