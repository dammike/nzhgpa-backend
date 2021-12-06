const express = require('express');
const router = express.Router();

const Region = require('../models/Region');

router.get('/', async (req, res) => {
    const regions = await Region.find();
    res.send(regions);
});

module.exports = router;