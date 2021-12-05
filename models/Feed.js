const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    article: {
        type: String
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