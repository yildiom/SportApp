const mongoose = require('mongoose');

//by using mongoose.Schema we determine the structure of our data on mongoDB
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

// we use the schema to initiate Exercise mongoose.model
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;