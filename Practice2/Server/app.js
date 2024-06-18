const express = require('express');
const app = express();
const simpleRouter = require('./Routers/SimpleRoutes')
const bodyParser = require('body-parser');
const cors = require('cors');



// simple router handling...
app.use("", simpleRouter)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())






// Root lavel home page routing 
app.get("/", (req, res) => {
    res.send("<h3>Home Page</h3>")
})




// invalid Router hanlder

app.use((req, res) => {
    res.send("<h3>404 Not Found</h3>")
})




module.exports = app;