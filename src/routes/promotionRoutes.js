const express = require('express');
const { getPromotions } = require('../controllers/promotionController');
const router = express.Router();

router.get('/:productId/promotions', getPromotions);

module.exports = router;
