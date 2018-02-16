const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsalgoSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('Sector', newsalgoSchema, 'sector');