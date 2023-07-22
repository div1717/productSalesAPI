const express = require('express');
const router = express.Router();

const ItemsInUniqueCategories = require('../controller/controller.pieCharts');

router.get('/ItemsInUniqueCategories/:month', ItemsInUniqueCategories);

module.exports = router;