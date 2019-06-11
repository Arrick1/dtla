const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dtla', {
  useNewUrlParser: true,
  UseCreateIndex: true,
  useFindAndModify: true
});


mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
});