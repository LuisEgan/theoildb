const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    Date: String,
    Value: String
});

module.exports = mongoose.model('Data', dataSchema);