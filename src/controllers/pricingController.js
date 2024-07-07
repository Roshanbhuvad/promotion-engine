const { calculatePrice } = require('../services/pricingService');

const getPrice = async (req, res) => {
    try {
    const { productId } = req.params;
    const price = await calculatePrice(productId);
    res.json({ price });

    } catch(productError) {
        res.status(400).json({ error: productError.message });
    }
};

module.exports = { getPrice };
