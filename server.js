const express = require('express');
const reviewRoutes = require('./routes/reviewRoutes.js');
const Review = require('./models/reviewSchema.js'); // Import the Review model
const bodyParser = require('body-parser'); // Import body-parser to parse form data 

require('dotenv').config();
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

    
    app.use(express.urlencoded({ extended: true })); // For handling form submissions

app.use(bodyParser.urlencoded({ extended: true })); // This is essential to parse form data



app.use(express.static(path.join(__dirname, 'public'))); // <--- This line serves static files


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', reviewRoutes); // Use the review routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
