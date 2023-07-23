
const mongoose = require("mongoose");
mongoose.set('strictQuery',true);

mongoose.connect('mongodb://127.0.0.1:27017/employee_review');

const connectWithDb = mongoose.connection;

connectWithDb.on('error',console.error.bind(console,"Error connecting to MongoDB"));

connectWithDb.once('open',function(){
    console.log('Connected to database :: MongoDB')
});

module.exports = connectWithDb;
