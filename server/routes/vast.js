const express = require('express');
const vastController = require('../controllers/vast');
const router = express.Router();

router.get('/fetch_vast/:id', vastController.fetchVast);

router.post('/create_vast', vastController.createVast);


module.exports = router;