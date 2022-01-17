require('dotenv').config()

const username = process.env.DB_USERNAME
const pass = process.env.DB_PASSWORD
const collectionname = process.env.DB_COLLECTIONNAME
const hostname = process.env.DB_HOSTNAME

module.exports = {
    url: `mongodb+srv://${username}:${pass}@${hostname}/${collectionname}`
}