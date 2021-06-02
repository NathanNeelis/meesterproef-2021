const mongoose = require('mongoose');
const hashPassword = require('../utils/hashPassword');
const comparePassword = require('../utils/comparePassword');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})

userSchema.pre('save', hashPassword);
userSchema.methods.comparePassword = comparePassword;

const User = mongoose.model('users', userSchema);
module.exports = User;