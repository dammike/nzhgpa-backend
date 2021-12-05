const express = require('express');
const router = express.Router();

const Feed = require('../models/Feed');

router.get('/', async (req, res) => {
    const feeds = await Feed.find();
    res.send(feeds);
});

module.exports = router;
