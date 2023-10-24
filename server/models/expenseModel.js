const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  date: { type: Date, require: true },
  income: { type: Number, require: true },
  expense: { type: Number, require: true },
});

const TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;