
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
// import express from 'express'
// import expressLayouts from 'express-ejs-layouts'
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

require('dotenv').config();


const app = express();
const port = 5000 || process.env.PORT;


app.use(passport.initialize());
app.use(passport.session());



app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Database connected
connectDB();


// static files
app.use(express.static('public'));


// Templating engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine','ejs');

// Routes
app.use('/', require('./server/routes/auth'));
app.use('/',require('./server/routes/index'));
app.use('/',require('./server/routes/dashboard'));

// Handle 404 
app.get('*', (req,res)=> {
    // res.status(404).send('404 page not found!');
    res.status(404).render('404');
})

app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
})

