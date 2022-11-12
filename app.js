const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send('Route is working...!')
})

module.exports = app;