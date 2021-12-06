const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 55
    },
    value: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Region', regionSchema);