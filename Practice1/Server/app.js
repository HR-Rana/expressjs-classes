const express = require('express');
const app = express();
const userRoutes = require("./src/Router/user.router")


// user Routing handles from here..!
app.use("/user", userRoutes)



// home route
app.get("/", (req, res) => {
    res.send("this is Express js home page")
})

// Invalied routes output
app.use((req,res)=>{
    res.send("<h2>404 ||  Sorry, we couldn't find the Page</h2>")
})

module.exports = app;