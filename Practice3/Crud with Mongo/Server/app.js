require("./Config/DB")
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const UserRouter = require('./Router/user.router');


// middleware for this application
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(cors());



// user router handler
app.use("/", UserRouter)








// home page Routing
app.get('/', (req, res)=>{
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
        statusCode:500,
        message: "The Server Request is not valid, Internal Server Error",
    })
})






module.exports = app;