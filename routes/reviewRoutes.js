const express = require('express');
const router = express.Router();
const Review = require('../models/reviewSchema');

// Route to fetch reviews with pagination
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 3;

    try {
        const reviews = await Review.find()
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await Review.countDocuments();

        res.render('reviews', {
            reviews,
            currentPage: page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const reviewController = require('../controllers/reviewController');

// router.get('/', reviewController.getAllReviews);

// module.exports = router;




// // const express = require('express');
// // const about = express.Router();

// // about.get('/', (req, res) => {
// //     res.send('About us');
// // })
// // module.exports = about;