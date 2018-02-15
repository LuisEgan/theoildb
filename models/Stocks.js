const mongoose = require('mongoose');
const { Schema } = mongoose;

const stocksSchema = new Schema({
    Date: String,
    Value: Number,
});

module.exports = mongoose.model('Stocks', stocksSchema, 'stocks');