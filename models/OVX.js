const mongoose = require('mongoose');
const { Schema } = mongoose;

const ovxSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String,
    Timeframe: String,
    Num: Number
});

module.exports = mongoose.model('OVX', ovxSchema, 'ovx');