const { calculatePrice } = require('../services/pricingService');

const getPrice = async (req, res) => {
    const { productId } = req.params;
    const price = await calculatePrice(productId);
    res.json({ price });
};

module.exports = { getPrice };
