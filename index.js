const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')

const dotenv=require('dotenv')
//Adding env variables to node enviorment
dotenv.config({path:'./.env'})
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//request logging tool


// Connect to DATABASE
const DATABASE_URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.uqdqweh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
