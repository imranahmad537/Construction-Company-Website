const Review = require('../models/reviewSchema.js'); // Make sure the path is correct

// Show all reviews on main page
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();  // Fetch all reviews from DB
    res.render('index', { reviews });     // Pass to index.ejs (or your main page)
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).send("Server Error");
  }
};

// Handle new review submission from modal/form
exports.submitReview = async (req, res) => {
  try {
    const { name, review } = req.body;
    await Review.create({ name, review });  // Save to MongoDB
    res.redirect('/');                      // Redirect to main page after submission
    // res.render('index', { reviews: await Review.find(), successMessage: 'Review Submitted Successfully!' });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).send("Server Error");
  }
};
