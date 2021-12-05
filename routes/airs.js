const express = require('express');
const router = express.Router();

const Airs = require('../models/Airs');

router.get("/", async (req, res) => {
    const airs = await Airs.find();
    res.send(airs);
});

module.exports = router;