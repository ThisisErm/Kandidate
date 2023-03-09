const express = require("express")
const router = express.Router()
const candidatesCTRL = require("../../controllers/api/candidates")


//GET /api/candidates
router.get("/", candidatesCTRL.index)

//GET /api/candidates/:id
router.get("/:id", candidatesCTRL.show)

//POST /api/candidates
router.post("/", candidatesCTRL.create)

//PATCH /api/candidates/:id
router.patch("/:id",candidatesCTRL.updateCandidate)

//DELETE /api/candidates/:id
router.delete("/:id", candidatesCTRL.deleteCandidate)

module.exports = router