const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    },
    title: {
        type: String,
        lowercase: true,
        required: true
    },
    description: {
        type: String,
        lowercase: true,
        required: true
    },
    article: {
        type: String,
        lowercase: true,
    },
    navigation: {
        type: String,
        default: 'FeedDetails'
    },
    viewCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Feed', feedSchema);