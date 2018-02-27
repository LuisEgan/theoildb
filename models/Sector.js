const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsalgoSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String,
    Timeframe: String,
    Num: Number
});

module.exports = mongoose.model('Sector', newsalgoSchema, 'sector');