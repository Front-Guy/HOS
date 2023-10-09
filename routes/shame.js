// Importer express
const express = require("express");

const shameController = require("../controllers/shame")

const router = express.Router();

router.get("/", shameController.getShames);

router.post("/", shameController.createShame);

router.patch("/:id", shameController.countShame);

router.delete("/:id", shameController.deleteShame)

module.exports = router;