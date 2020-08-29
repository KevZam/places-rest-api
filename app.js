const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const HttpError = require('./models/http-error')

const app = express();

app.use(bodyParser.json())

app.use('/api/places', placesRoutes); // filter only placesRoutes that start with /api/places

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

app.listen(5000);