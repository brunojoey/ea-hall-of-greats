const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hallOfGreatsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, function() {
  console.log(`🌎  ==> server listening on Port: ${PORT}`);
});