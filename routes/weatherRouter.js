const router = require('express').Router();
const { readWeather } = require('../controller/weatherController');


router.get('/weather', readWeather);

module.exports = router;