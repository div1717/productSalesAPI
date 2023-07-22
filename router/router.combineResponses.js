const express = require('express');
const router = express.Router();

const fetchCombinedData = require('../controller/controller.combineResponses');

router.get('/fetchCombinedData/:month', fetchCombinedData);

module.exports = router;