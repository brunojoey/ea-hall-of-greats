const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const fs = require('fs');
const multer = require('multer');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Multer handles images in Mongoose for the GamePage.
// app.use(multer({ dest: "./images/",
//   rename: function (fieldname, filename) {
//     return filename;
//   },
//  }));

//  app.post("/api/games",function(req,res){
//   var newItem = new Item();
//   newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//   newItem.img.contentType = "image/png";
//   newItem.save();
//  });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hallOfGreatsDB');

app.listen(PORT, function() {
  console.log(`🌎  ==> server listening on Port: ${PORT}`);
});
