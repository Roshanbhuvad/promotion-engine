const {Promotion } = require('../models')
const {Op} = require('sequelize')

const getActivePromotions = async(productId) => {
    const today = new Date();

    return await Promotion.findAll({
        where: {
            product_id: productId,
            start_date: {[Op.lte]: today},
            end_date: {[Op.gte]: today}
        }
    });
};

module.exports = {getActivePromotions}