const express = require('express');
const app = express();
const multer = require('multer');




// home route 
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Server home page'
    });
});





// file upload to server handler  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploaded/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "-" + file.originalname
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })





app.get("/uploadForm", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// file upload request
app.post("/uploadForm", upload.single("image"),  (req, res) => {
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