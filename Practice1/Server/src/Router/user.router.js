const express = require("express");
const router = express.Router();




router.get('/', (req, res)=>{
    res.send("this is home page")
})

router.get("/register", (req, res)=>{
    res.status(200).json({
        message:"Hi, this is Register page for you",
        status:200,
        data:null
    })
})


router.get("/Hello", (req, res)=>{
    res.redirect("/")
})

// send html or any files, but it's didn't work..!
router.get("/getHtml", (req, res)=>{
   res.sendFile(__dirname + "/../Assist/index.html")
})


// handle multiple params requ
router.get('/userId/:Id/userName/:name', (req, res)=>{
    const id = req.params.Id;
    const name = req.params.name;

    res.send(`<h3>User name is ${name}, and user Id is ${id}</h3>`);
})



// testing header data request 
router.get('/headerData', (req, res) => {
    const name = req.header("name");
    const age = req.header("age");
    res.send(`<h3>The user name Is:${name}, User age is ${age}</h3> are provide from header data`);
})


// routing regular expression handler, 
// it's can specify for latter or number requ validation

router.get("/:id([0-9]+)", (req, res) => {
    res.send(`the id is ${req.params.id}`)
})


// highst id number limit set handler 
// highst id number limit set handler 
router.get("/hello/:id([0-9]{5})", (req, res)=>{
    res.send(`the id is ${req.params.id}`)
})








module.exports = router;