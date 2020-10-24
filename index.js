const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://mongo:mongo@cluster0.ameg5.mongodb.net/Groceries?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const itemsRouter = require('./routes/listItems');

app.use('/listItems', itemsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});