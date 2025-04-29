const express = require('express');
const about = require('./routes/about.js');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const port = 3000;




mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.log('MongoDB connection error:', err);
});
const User = require('./models/userModel.js');
const { name } = require('ejs');

 async function insert(){
    await User.create({
        name:"imran ahmad",
        review:"this is a review",
        image:"https://images.unsplash.com/photo-1677631231234-1234567890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltcmFuJTIwYWhtYWQlMjBpbWFnZXxlbnwwfHx8fDE2ODQ1NTY5NzE&ixlib=rb-4.0.3&q=80&w=400"
    });
}
insert();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let name = "Imran Ahmad";
    res.render("index", {name: name});
})

app.use('/about', about )

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});