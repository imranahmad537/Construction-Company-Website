const express = require('express');
const reviewRoutes = require('./routes/reviewRoutes.js'); 
require('dotenv').config();
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

// Import the User model (Review Schema)
const User = require('./models/reviewSchema.js');


app.use(express.static(path.join(__dirname, 'public'))); // <--- This line serves static files


// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define the home route with pagination
app.get('/', async (req, res) => {
    let name = "Imran Ahmad";
    const perPage = 3; // Number of reviews per page
    const page = req.query.page || 1; // Default to page 1 if not provided

    // Fetch reviews with pagination
    const reviews = await User.find()
        .skip((perPage * page) - perPage) // Skip the reviews of previous pages
        .limit(perPage); // Limit the number of reviews to `perPage`

    // Get the total count of reviews for pagination calculation
    const count = await User.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(count / perPage);

    // Pass reviews, pagination data to the view
    res.render('index', { name: name, reviews: reviews, currentPage: page, totalPages: totalPages });
});

// Use the reviews route for `/reviews` endpoint
app.use('/reviews', reviewRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
