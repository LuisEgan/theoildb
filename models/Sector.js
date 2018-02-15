const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsalgoSchema = new Schema({
    Date: String,
    Value: Number
});

module.exports = mongoose.model('Sector', newsalgoSchema, 'sector');