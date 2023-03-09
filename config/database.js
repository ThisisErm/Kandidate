const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on("connected", function () {
    console.log(`Database Information: DB Name = '${db.name}' DB Host= '${db.host}' DB Port: ${db.port}`)
})