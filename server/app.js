const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { check, validationResult } = require('express-validator/check');
const db = require('./util/db');
const vastRoutes = require('./routes/vast');

const app = express();



// parse application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/', vastRoutes);

app.use((error, req, res, next) => {
    const { statusCode, message, data } = error;
    res.status(statusCode).json({ message, data })
});


app.listen('4000', () => console.log('server started on port 4000'));



