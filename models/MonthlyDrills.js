const mongoose = require('mongoose');
const { Schema } = mongoose;

const monthlydrillsSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('MonthlyDrills', monthlydrillsSchema, 'monthlydrills');