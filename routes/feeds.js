const express = require('express');
const router = express.Router();

const Feed = require('../models/Feed');

router.get('/', async (req, res) => {
    const feeds = await Feed.find();
    res.send(feeds);
});

router.get('/search', async (req, res) => {
    const sortBy = req.query.sortBy;
    const feeds = await Feed.find();
    if (sortBy) {
        switch (sortBy) {
            case "popularity":
                return res.send(feeds.sort((a, b) => parseInt(b.viewCount) - parseInt(a.viewCount)));
                break;
            case "latest":
                return res.send(feeds.sort((a, b) => new Date(b.date) - new Date(a.date)));
                break;
            case "competition":
                return res.send(feeds.sort((a, b) => new Date(b.date) - new Date(a.date)));
                break;
            default:
                return res.status(400).send('bad search query!');
        }
    }
    res.status(400).send('Incomplete URL request');
});

module.exports = router;
