const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected ${process.env.MONGO_URI}`)
  });
  
  mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect')
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected')
  });