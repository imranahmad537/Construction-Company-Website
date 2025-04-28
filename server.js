const express = require('express');
const about = require('./routes/about.js');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let name = "Imran Ahmad";
    res.render("index", {name: name});
})

app.use('/about', about )

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});