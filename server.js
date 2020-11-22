const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }));

const uri =
  "mongodb+srv://mongo:mongo@cluster0.ameg5.mongodb.net/Groceries?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Define Routes
app.use("/listItems", require("./routes/listItems"));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
