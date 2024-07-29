const express = require('express');
const app = express();
const multer = require('multer');
const mongoose = require('mongoose');
const User = require("./src/models/user.schema")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// db connection 
const dbURL = 'mongodb+srv://expressWithAnisul:expressWithAnisul123@cluster1.lqd6sol.mongodb.net/PracticeCrudWithMongodb';

mongoose.connect(dbURL)
.then(()=>{
    console.log("Detabase connected successfully")
})
.catch((err)=>{
    console.log("database connection error", err.message);
    
})


// home route 
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Server home page'
    });
});





// file upload to server handler  
    const storage = multer.diskStorage({
        destination: function FileUploadHandler(req, file, cb) {
          cb(null, 'uploaded/')
        },
        filename: function (req, file, cb) {
          const fileName = Date.now() + "-" + file.originalname
          cb(null, fileName)
        }
      })
      


    const upload = multer({ storage: storage })


app.get("/Regsitration-form", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// file upload request
app.post("/Regsitration-form", upload.single("image"), async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            phone: req.body.phone,
            password:  req.body.password,
            img: req.file.
        })
        await newUser.save();
        res.status(200).json({
            message: 'User Create Successfully'
        })
    } catch (error) {
        res.send(error.message)
    }



    res.status(200).json({
        message: 'File Uploaded Successfully'
    })
})













// invalid routes handlers 
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found'
    });
});







module.exports = app