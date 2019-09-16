const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()

require('dotenv').config()

// Connection to the database "exhibitionApp"
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Enables us to send back data to the Client side, in a json format
app.use(express.json());

// Setting up bodyparser
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static("public"))

// Establish connection
app.listen(process.env.PORT, () => console.log("Lea's website is running"));

// Error handling
app.use(function (err, req, res, next) {
  if (err) {
    res.status(err.status || 500).json({message: err.message})
  } else {
    res.status(500).json({message: "Something went wrong."})
  }
})

// Setting up for deployment
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

// Exporting the app
module.exports = app;