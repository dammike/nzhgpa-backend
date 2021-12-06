const express = require('express');
const router = express.Router();

const FlyingSite = require('../models/FlyingSite');

router.get("/", async (req, res) => {
    const flyingSites = await FlyingSite.find();
    res.send(flyingSites);
});

router.get('/:region', async (req, res) => {
    const match = req.params.region.toLowerCase();
    const flyingSites = await FlyingSite.find({ region: match });
    if (!flyingSites || flyingSites.length === 0)
        return res.status(404).send('No sites found for requested region...');
    res.send(flyingSites);
})

module.exports = router;