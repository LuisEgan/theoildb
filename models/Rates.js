const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratesSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('Rates', ratesSchema, 'rates');