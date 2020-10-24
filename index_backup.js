const express = require('express')
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000

const uri = "mongodb+srv://mongo:mongo@cluster0.ameg5.mongodb.net/Groceries?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("database is onlie");
})

const itemsRouter = require('./routes/listItems');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(cors())
  .use(express.json())
  //.use('/listItems', itemsRouter)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
