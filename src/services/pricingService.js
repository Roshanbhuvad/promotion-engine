const {Promotion, Product } = require('../models')
const {Op} = require('sequelize')
const product = require('../models/product')

const calculatePrice = async(productId) => {
    const product = await Product.findByPk(productId);
    const promotions = await Promotion.findAll({
        where: {
            product_id: productId,
            start_date: {[Op.lte]: new Date()},
            end_date: {[Op.gte] : new Date()}
        }
    });

    let finalPrice = product.price;

    promotions.forEach((promotion) => {
        if(promotion.discount_type === 'percentage') {
            finalPrice -= (finalPrice * promotion.discount_value) / 100;
        } else if (promotion.discount_type === 'fixed') {
            finalPrice -= promotion.discount_value;
        }
    });
    return finalPrice;
};

module.exports = {calculatePrice};
