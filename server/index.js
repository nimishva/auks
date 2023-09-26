const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8001;
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/dbConnection');
const { addInitialDataToDb } = require('./utils/helperFunctions');
const User = require('./models/userModel');



    (async function () {
        await connectDB();

        /* ----------------dont delete it-------- */
        // addInitialDataToDb();
    })()

const app = express();
app.use(cors({ origin: '*' }))
app.use(bodyParser.json());


app.use('/api', require('./routes'));


// i think error handler middleware has to be used as last middleware as we have to catch the error from all above middleware function that will be passed to next middleware via next() 

app.use(errorHandler);


app.listen(PORT, (err) => {



    console.log(`Server is up and running on port ${PORT}`);



});