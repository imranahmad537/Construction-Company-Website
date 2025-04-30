const express = require('express');
const router = express.Router();
const reviewController = require('../Controller/reviewController.js'); // Adjust the path as necessary

router.get('/', reviewController.getReviews); // Fetch all reviews
router.post('/submit', reviewController.submitReview); // Submit a new review

module.exports = router;
// This route handles the submission of reviews and fetching all reviews.