
const dotenv = require('dotenv');
dotenv.config();

const environment = process.env.DEV

const config = {
    development:{
        host:process.env.DEV_HOST,
        user:process.env.DEV_USER,
        password:process.env.DEV_PASS,
        database:process.env.DEV_DATABASE,
        dialect:process.env.DEV_DIALECT,
        port:process.env.DEV_PORT
    }

}

module.exports = config[environment];