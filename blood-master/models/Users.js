const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
        index: { unique: true }
    },
    password: { 
        type: String, 
        required: true 
    },
    birthdate: { 
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: { 
        type: Boolean,
        required: true 
    },
    bloodType: { 
        type: Number, 
        required: true 
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    cellphone: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    updated: {
        type: Date,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    prevDonations: [{
        requester: String,
        date: Date,
        hospital: String
    }]
});

module.exports = mongoose.model('Users', userSchema);
