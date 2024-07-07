const express = require('express');
const { getPrice } = require('../controllers/pricingController');
const router = express.Router();

router.get('/:productId/price', getPrice);

module.exports = router;
