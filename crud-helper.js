require("dotenv").config()
require("./config/database")

const user = require("./models/user")
const candidates = require("./models/candidates")
const roles = require("./models/roles")
let user, candidates