const express = require('express');
const router = express.Router();

const ItemsInAllPriceRanges = require('../controller/controller.barCharts')

router.get('/ItemsInAllPriceRanges/:month', ItemsInAllPriceRanges);

module.exports = router;