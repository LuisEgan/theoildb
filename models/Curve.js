const mongoose = require('mongoose');
const { Schema } = mongoose;

const curveSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String,
});

module.exports = mongoose.model('curve', curveSchema, 'curve');