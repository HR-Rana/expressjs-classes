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




module.exports = router;