const express = require('express');
const router = express.Router();

const Feed = require('../models/Feed');

router.get('/', async (req, res) => {
    const feeds = await Feed.find();
    response.send(feeds);
});

module.exports = router;
