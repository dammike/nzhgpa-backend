const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const feeds = require('./routes/feeds');
const pilots = require('./routes/pilots');
const flyingSites = require('./routes/flyingSites');
const airs = require('./routes/airs');
const regions = require('./routes/regions');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Connected to Database...'))
    .catch(err => console.error('Could not connect to Database...', err));

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/api/feeds', feeds);
app.use('/api/pilots', pilots);
app.use('/api/flyingSites', flyingSites);
app.use('/api/airs', airs);
app.use('/api/regions', regions);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on Port: ${PORT}`));