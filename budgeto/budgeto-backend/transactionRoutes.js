const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// ADD transaction
router.post("/", async (req, res) => {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.json(transaction);
});

// GET all transactions
router.get("/", async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

// DELETE transaction
router.delete("/:id", async (req, res) => {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted" });
});

module.exports = router;
