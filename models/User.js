const { mongo, Mongoose } = require("mongoose")

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        requered: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    password: {
        type: String,
        requered: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = User = mongoose.model('user', UserSchema);