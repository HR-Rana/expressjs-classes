const app = require('./app')
const Port = 3000;






app.listen(Port, (req, res)=>{
    console.log(`Server is Running at ${Port}`);
})

