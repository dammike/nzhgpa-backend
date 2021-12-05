const mongoose = require('mongoose');

const pilotSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['pilot', 'pg-school', 'hg-school', 'wof-inspector']
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 55,
        index: true
    },
    pin: {
        type: Number,
        index: true
    },
    club: {
        type: String,
        minlength: 3,
        maxlength: 155
    },
    membershipLevel: {
        type: String,
        enum: ['full', 'student']
    }
}, { timestamps: true });

module.exports = mongoose.model('Pilot', pilotSchema);