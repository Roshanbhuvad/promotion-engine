const {Sequelize, Model} = require('sequelize');
const config = require('../config/config.js').development;
const sequelize = new Sequelize(config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
    
    }
);

const Product = require('./product')(sequelize);
const Promotion = require('./promotion')(sequelize);

Product.hasMany(Promotion, {foreignKey: 'product_id'});
Promotion.belongsTo(Product, {foreignKey: 'product_id'})

module.exports = {sequelize, Product, Promotion};