const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

//Connection to Database
connectDB();

const app = express();

//Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route setup
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/challenges', require('./routes/challengeRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
