const express = require('express')
const router = express.Router();
const app = require('../app')





const CreateForm = 
`
    <form method="POST" action="/userData">
        <input type="text" name="name" placeholder="Write your name" /> <br/>
        <input type="number" name="age" placeholder="enter your age" /> <br/>
        <input type="submit" value="Submit" />
    </form>
`




router.get("/userForm", (req, res) => {
    res.send(CreateForm)
})





router.post("/userData", (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const age = Number(req.body.age);
    console.log(age)
    res.send().json({
        Status:"success",
        StatusCode:"200",
    })
    console.log("server hitting..")
})






module.exports = router;