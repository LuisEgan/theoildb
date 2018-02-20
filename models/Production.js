const mongoose = require('mongoose');
const { Schema } = mongoose;

const productionSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('production', productionSchema, 'production');