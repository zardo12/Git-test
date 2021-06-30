const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Postrouter = require('./routes/posts.routers')
const stundenplanrouter = require('./routes/stundenplan.router')
const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://zardasht:${process.env.ATLAS_PW}@cluster0.uyd8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,});
const db = mongoose.connection;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use('/posts',Postrouter)
app.use('/stundenplan',stundenplanrouter)

const port = process.env.PORT || 8080; 
app.listen(port,function(){
    console.log(`server is running on port ${port}`)
}) 