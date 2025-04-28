const express = require('express');
const about = express.Router();

about.get('/', (req, res) => {
    res.send('About us');
})
module.exports = about;