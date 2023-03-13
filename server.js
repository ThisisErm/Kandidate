//to run express server in terminal:  nodemon server
    //server side
        //runs port 3001
//to run React dev server in terminal:  npm start
    //client side
        //runs port 3000
        const cors = require('cors')
        const express = require("express")
        const path = require("path")
        const favicon = require("serve-favicon")
        const logger = require("morgan")
            //always require and configure near the top
        require("dotenv").config()
            //connect to the database at the connection string url
        require("./config/database")
        
        const app = express() //create the app
        
        
            // Configure to use port 3001 instead of 3000 during
            // development to avoid collision with React's dev server
        const PORT = process.env.PORT || 3001
        
        
        app.use(logger("dev"))
        app.use(express.json())
        app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }))
        
            // Configure both serve-favicon & static middleware
            // to serve from the production 'build' folder
        // app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
            //telling express app to use this directory for the static assets
        app.use(express.static(path.join(__dirname, "build")))
        
        app.use(require("./config/checkToken"))
        
        //-------API Routes here, before the catch all--------------
        app.use("/api/users", require("./routes/api/users"))
        app.use("/api/candidates", require("./routes/api/candidates"))
        app.use("/api/roles", require("./routes/api/roles"))

        
        
            // The following "catch all" route (note the *) is necessary
            // to return the index.html on all non-AJAX requests
        app.get("/*", function(req,res) {
            res.sendFile(path.join(__dirname, "build", "index.html"))
        })
        
        
        app.listen(PORT, function() {
            console.log(`Express app running on port ${PORT}`)
        }) 