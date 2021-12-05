const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const pilots = require('./routes/pilots');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DB_URL, () => console.log('Connected to Database...'));

app.use(express.json());
app.use(cors());
app.use('/api/pilots', pilots);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on Port: ${PORT}`));