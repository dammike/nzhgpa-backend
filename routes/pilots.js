const express = require('express');
const router = express.Router();

const Pilot = require('../models/Pilot');

router.get('/', async (req, res) => {
    const pilots = await Pilot.find();
    res.send(pilots);
});

module.exports = router;