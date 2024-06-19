
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


// middleware for this application
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
// app.use(cors());




// home page Routing
app.get('/', function(req, res){
    res.send('Hello World this is home page');
})




// handle invalid routes
app.use((req, res, next) => {
    res.status(500).json({
        message: 'Route not found, Something went wrong'
    })
})



// handle Server Error 
app.use((err, req, res, next) => {
    res.status(500).json({
        statusCode: err.status,
        message: err.message,
    })
})






module.exports = app;