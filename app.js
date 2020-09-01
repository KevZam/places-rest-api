require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error')

const app = express();

app.use(bodyParser.json())

app.use('/api/places', placesRoutes); // filter only placesRoutes that start with /api/places
app.use('/api/users', usersRoutes);

app.use((req, res, next) => { // will only be run if none of the placeRoutes send a response. 
  const error = new HttpError('Could not find this route.', 404);
  throw error;
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured." });
})

mongoose
  .connect(`mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PASSWORD}@cluster0.xrmtg.mongodb.net/places?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err)
  })