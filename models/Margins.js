const mongoose = require('mongoose');
const { Schema } = mongoose;

const marginsSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('Margins', marginsSchema, 'margins');