const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
const dotenv=require('dotenv')

// Connect to DATABASE
dotenv.config({path:'./.env'})
const DATABASE_URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.uqdqweh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll();