const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./models');
const promotionRoutes = require('./routes/promotionRoutes');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express()
app.use(bodyParser.json());

app.use('/api/v1/products', promotionRoutes)
app.use('/api/v1/products', pricingRoutes)


sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');

    });
}).catch((err) => {
    console.log('Unable to connect to the database', err);
})