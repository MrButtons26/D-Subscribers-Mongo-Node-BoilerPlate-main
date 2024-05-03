const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')

const dotenv=require('dotenv')
//Adding env variables to node enviorment
dotenv.config({path:'./config.env'})
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//request logging tool


// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_LOCAL;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
