const express = require('express');
const router = express.Router();

const {
    totalSaleAmount, totalSoldItems, totalNotSoldItems
} = require('../controller/controller.statistics');

router.get('/totalSaleAmount/:month', totalSaleAmount);
router.get('/totalSoldItems/:month', totalSoldItems)
router.get('/totalNotSoldItems/:month', totalNotSoldItems)

module.exports = router;