const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsalgoSchema = new Schema({
    Date: String,
    Value: Number,
    Num: Number,
    Price: Number,
    Timeframe: String
});

module.exports = mongoose.model('NewsAlgo', newsalgoSchema, 'newsalgo');