const express = require('express');
const router = express.Router();

const {
    totalSaleAmount
} = require('../controller/controller.statistics');

router.get('/totalSaleAmount/:month', totalSaleAmount);

module.exports = router;