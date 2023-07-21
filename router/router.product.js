const express = require('express');
const router = express.Router();

const {
    populatedb
 } = require('../controller/controller.product');

router.get('/populatedb', populatedb);

module.exports = router;