const mongoose = require('mongoose');
const { Schema } = mongoose;

const coll2Schema = new Schema({
    Date: String,
    Algo: Number,
    CL: Number
});

module.exports = mongoose.model('Coll2', coll2Schema);