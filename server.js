const express = require('express');
const about = require('./routes/about.js');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello Express');
})

app.use('/about', about )

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});