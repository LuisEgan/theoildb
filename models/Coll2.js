const mongoose = require('mongoose');
const { Schema } = mongoose;

const coll2Schema = new Schema({
    Date: String,
    Value: String
});

module.exports = mongoose.model('Coll2', coll2Schema);