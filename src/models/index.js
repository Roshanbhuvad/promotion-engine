const {Sequelize, Model} = require('sequelize');
const sequelize = new Sequelize('promotions_price','mysql', 'root@123', {
    host:'localhost',
    dialect: 'mysql'
});

const Product = require('./product')(sequelize);
const Promotion = require('./promotion')(sequelize);

Product.hasMany(Promotion, {foreignKey: 'product_id'});
Promotion.belongsTo(Product, {foreignKey: 'product_id'})

module.exports = {sequelize, Product, Promotion};