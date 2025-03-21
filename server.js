const express = require('express');
require('./config/database');
const weatherRouter = require('./routes/weatherRouter')
const PORT = 1914;

 const app = express();
 app.use(express.json());
 app.use(weatherRouter);
 
 app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`)
 })