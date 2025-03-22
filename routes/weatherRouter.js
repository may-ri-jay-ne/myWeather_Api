const router = require('express').Router();
const { readWeather, getAllWeatherUpdate } = require('../controller/weatherController');


router.get('/weather', readWeather);
router.get('allUpdate', getAllWeatherUpdate)

module.exports = router;