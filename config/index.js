const dotenv = require('dotenv')
dotenv.config()

const config = {
    MONGODB_URL : process.env.MONGODB_URL,
    PORT : process.env.PORT
}

module.exports = config