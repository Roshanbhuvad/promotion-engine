const { getActivePromotions } = require('../services/promotionService');

const getPromotions = async (req, res) => {
    try {
    const { productId } = req.params;
    const promotions = await getActivePromotions(productId);
    res.json(promotions);
    } catch(promotionError) {
        res.status(400).json({ error: promotionError.message });
    }
};

module.exports = { getPromotions };
