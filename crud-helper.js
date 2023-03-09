require("dotenv").config()
require("./config/database")

//require all the Mongoose models

const user = require("./models/user")
const candidates = require("./models/candidates")

//cosnt Item = require("./models/item")
// const Category = require('./models/category')
// const Order = require('./models/order')

//local variables will come in handy for holding retrieved documents
let user, candidates