const mongoose = require('mongoose');
const { Schema } = mongoose;

const stocksSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('Stocks', stocksSchema, 'stocks');