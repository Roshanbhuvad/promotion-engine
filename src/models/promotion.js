const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {
    return sequelize.define("Promotion", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount_type: {
            type: DataTypes.ENUM('percentage', 'fixed'),
            allowNull: false
        },
        discount_value: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}