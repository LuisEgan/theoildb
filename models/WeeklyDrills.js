const mongoose = require('mongoose');
const { Schema } = mongoose;

const weeklydrillsSchema = new Schema({
    Date: String,
    Value: Number,
    Arg: String
});

module.exports = mongoose.model('WeeklyDrills', weeklydrillsSchema, 'weeklydrills');