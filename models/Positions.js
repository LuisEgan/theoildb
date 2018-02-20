const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionsSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('Positions', positionsSchema, 'positions');