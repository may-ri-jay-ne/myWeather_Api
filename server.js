const express = require('express');
require('./config/database');
const cors = require('cors')
const morgan = require('morgan')
const weatherRouter = require('./routes/weatherRouter')
const PORT = 1914;

 const app = express();
 app.use(cors({origin: "*"}));
 app.use(morgan('dev'));
 app.use(express.json());
 app.use(weatherRouter);

 app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`)
 })