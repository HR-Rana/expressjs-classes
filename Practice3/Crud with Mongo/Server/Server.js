const config = require('./Config/Config');
const app = require("./app");


const port = config.app.port












app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})