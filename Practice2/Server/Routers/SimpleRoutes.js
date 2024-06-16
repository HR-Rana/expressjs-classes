const express = require('express')
const router = express.Router()



router.get("/hi", (req, res) => {
    res.send("router hi is working.. ")
})








module.exports = router;