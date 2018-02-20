const mongoose = require('mongoose');
const { Schema } = mongoose;

const ovxSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('OVX', ovxSchema, 'ovx');