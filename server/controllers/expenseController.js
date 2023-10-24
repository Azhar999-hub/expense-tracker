const TransactionModel = require("../models/expenseModel");

const getTransaction = async (req, res) => {
  try {
    const transactions = await TransactionModel.find({}).lean();
    res.status(200).json({
      message: "Transaction Fetch Successfully!",
      transactions
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
}

const addTransaction = async (req, res) => {
  const { income, expense } = req.body;
  const date = Date.parse(req.body.date);

  try {
    if (!date || isNaN(date)) {
      return res.status(400).json("Date is Required and must be a valid date.");
    }
    if (!income) {
      return res.status(400).json("Income is Required.");
    }
    if (!expense) {
      return res.status(400).json("Expense is Required.");
    } else {
      const transaction = new TransactionModel({
        date: new Date(date),
        income: income,
        expense: expense,
      });
      await transaction.save();
      return res.status(201).json({
        message: "Transaction Added Successfully!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Server Error",
    });
  }
};

module.exports = {
  getTransaction,
  addTransaction,
};
