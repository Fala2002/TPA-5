const express = require("express");
const router = express.Router();

const {
    getAllTugas,
    getTugasByID,
    addTugas,
    deleteTugasByID,
    deleteAllTugas,
    updateTugasByID,
} = require("../controllers/tugas.controller");

router.get("/", getAllTugas);
router.get("/:_id", getTugasByID);
router.post("/", addTugas);
router.delete("/:_id", deleteTugasByID);
router.delete("/", deleteAllTugas);
router.put("/:_id", updateTugasByID);

module.exports = router;