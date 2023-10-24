const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const ExpenseRouter = require("./Routes/expenseRoute")

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())
app.use("/transaction", ExpenseRouter);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is Running on ${process.env.PORT} and also Database Connected Successfully`
      );
    });
  })
  .catch((error) => {
    console.log(`Database Connection Failed!" ${error}`);
  });
