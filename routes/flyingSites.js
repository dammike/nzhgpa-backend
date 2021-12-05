const express = require('express');
const router = express.Router();

const FlyingSite = require('../models/FlyingSite');

router.get("/", async (req, res) => {
    const flyingSites = await FlyingSite.find();
    res.send(flyingSites);
});

module.exports = router;