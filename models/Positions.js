const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionsSchema = new Schema({
    Dates: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('Positions', positionsSchema, 'positions');