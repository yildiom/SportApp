const mongoose = require('mongoose');

//by using mongoose.Schema we determine the structure of our data on mongoDB
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true,
});

// we use the schema to initiate User mongoose.model
const User = mongoose.model('User', userSchema);

module.exports = User;