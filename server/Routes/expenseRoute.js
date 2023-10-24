const express = require("express")
const { addTransaction, getTransaction } = require("../controllers/expenseController");

const router = express.Router();

router.post("/", addTransaction)
router.get("/", getTransaction);

module.exports = router;