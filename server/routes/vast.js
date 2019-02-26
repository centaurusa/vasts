const express = require('express');
const vastController = require('../controllers/vast');
const router = express.Router();
const { validate } = require('../validators/vast-validator');

router.get('/fetch_vast/:id', vastController.fetchVast);

router.post('/create_vast', validate('createVast'), vastController.createVast);


module.exports = router;