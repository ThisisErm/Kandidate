const express = require("express");
const router = express.Router();
const rolesCtrl = require("../../controllers/api/roles");

// GET /api/roles
router.get("/", rolesCtrl.index);

// GET /api/roles/:id
router.get("/:id", rolesCtrl.show);

// POST /api/roles
router.post("/", rolesCtrl.create);

// PATCH /api/roles/:id
router.patch("/:id", rolesCtrl.update);

// DELETE /api/roles/:id
router.delete("/:id", rolesCtrl.deleteRole);

module.exports = router;
