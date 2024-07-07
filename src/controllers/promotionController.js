const { getActivePromotions } = require('../services/promotionService');

const getPromotions = async (req, res) => {
    const { productId } = req.params;
    const promotions = await getActivePromotions(productId);
    res.json(promotions);
};

module.exports = { getPromotions };
