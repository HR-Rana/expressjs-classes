const mongoose = require('mongoose')
const config = require('./Config')


const dbUrl = config.DB.URL;


mongoose.connect(dbUrl)
.then(()=>{
    console.log('Database is connected');
})
.catch((err)=>{
    console.log('Database is not connected');
    console.log(err);
})