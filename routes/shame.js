// Importer express
const express = require("express");

const shameController = require("../controllers/shame")

const multer = require("../middleware/multer");

const router = express.Router();

router.get("/", shameController.getShames);

router.post("/", multer, shameController.createShame);

router.patch("/:id", shameController.countShame);

router.delete("/:id", shameController.deleteShame)

module.exports = router;