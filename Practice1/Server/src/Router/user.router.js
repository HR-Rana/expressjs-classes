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
   res.sendFile(__dirname+"Assist/Index.html")
})





module.exports = router;