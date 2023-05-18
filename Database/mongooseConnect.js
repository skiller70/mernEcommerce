const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/ecommerce';



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log('Connected to MongoDB',);
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });