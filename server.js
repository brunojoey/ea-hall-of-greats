const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hallOfGreatsDB');

app.listen(PORT, function() {
  console.log(`🌎  ==> server listening on Port: ${PORT}`);
});