
require('dotenv').config();


const Dev = {
    app:{
        port: process.env.PORT || 3001
    },
    DB:{
        URL : process.env.DB_URL_CONNECTION,
    }
}


module.exports = Dev;