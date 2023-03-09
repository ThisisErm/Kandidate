const express = require("express")
const router = express.Router()

const usersCTRL = require("../../controllers/api/users")
const ensureLoggedIn = require("../../config/ensureLoggedIn")

    //localhost:3000/api/users/
    //app.use("/api/users", userRoutes)
router.post("/", usersCTRL.create )
router.post("/login", usersCTRL.logIn)

router.get("/check-token", ensureLoggedIn, usersCTRL.checkToken)

module.exports = router