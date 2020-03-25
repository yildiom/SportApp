const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // to be able to connect to mongoDB database we need mongoose library

//Routes to make requests like get, post, delete etc.
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config(); // we add this to be able to use .env files

const app = express(); // we initiate express
const port = process.env.PORT || 8000;

app.use(cors()); // to be able to share data and get data we need this otherwise chrome will not allow as default
app.use(express.json()); // we add this to be able to use json

//CONNECTION WITH ROUTER FILES
app.use('/exercises', exercisesRouter); // we enable if /exercises is typed to the browser we use exercisesRouter
app.use('/users', usersRouter); // we enable if /users is typed to the browser we use usersRouter

const uri = process.env.ATLAS_URI;

//CONNECTION WITH MONGODB

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});