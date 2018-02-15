const mongoose = require('mongoose');
const { Schema } = mongoose;

const demandSchema = new Schema({
    Date: String,
    Value: Number,
});

module.exports = mongoose.model('Demand', demandSchema, 'demand');