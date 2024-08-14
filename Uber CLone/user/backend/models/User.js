const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
        enum: ['user', 'driver', 'admin'],
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        required: true,
        unique: true,
    }
});


UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;