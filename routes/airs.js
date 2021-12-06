const express = require('express');
const router = express.Router();

const Airs = require('../models/Airs');

router.get("/", async (req, res) => {
    const airs = await Airs.find().sort({ date: -1 });
    res.send(airs);
});

module.exports = router;