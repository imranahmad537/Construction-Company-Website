const Review = require('./reviewSchema.js');

// Fetch all reviews
exports.getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.find();
      res.render('reviews', { reviews }); // Pass to EJS view
    } catch (err) {
      res.status(500).send('Error fetching reviews');
    }
  };