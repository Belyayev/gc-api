const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    listItem: {
        description: { type: String, requered: true },
        isBought: { type: Boolean, requered: false }
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;