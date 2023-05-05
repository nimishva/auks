const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/dbConnection');

connectDB()
const app = express();
app.use(bodyParser.json());

 
app.use('/api', require('./routes'))
// i think error handler middleware has to be used as last middleware as we have to catch the error from all above middleware function that will be passed to next middleware via next() 
app.use(errorHandler);


app.listen(PORT, (err) => {
    console.log(`Server is up and running on port ${PORT}`);
})