const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('./images', express.static('images'));

// router.get('./images/:filename',(req,res) => {
//   res.sendFile(__dirname,"./images/" + req.param('filename'));
//   });

const imageFolder = './images'; // Name of the folder based on the root directory of your project
fs.readdir(path.join(__dirname, imageFolder), (err, files) => {
  if (err) return console.log('Error', err);
  console.log('Files', files); // will return all files in that directory
  const filesWithDirectory = files.map(file => path.join(__dirname, imageFolder) + '/' + file);
  console.log('more file names', filesWithDirectory); // will return all files in that directory with the directory name prepended
});

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hallOfGreatsDB');

app.listen(PORT, function() {
  console.log(`🌎  ==> server listening on Port: ${PORT}`);
});