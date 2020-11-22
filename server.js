const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }));


//Define Routes
app.use("/listItems", require("./routes/listItems"));
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
