const express = require('express');
const router = express.Router();

const { hello } = require('../controllers/ppController.js');

router.get('/pixelpump', hello);

module.exports = router;
