const express = require("express")
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const session = require("express-session")
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const authRouter = require('./routes/auth')
const corsOptions = {
  origin: 3000,
  credentials: true,
  optionsSuccessStatus: 200
}


app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave:false,
  secret:"arrick is cool",
  saveUninitialized: false
}))

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/auth', authRouter);


app.post('/', async(req,res) => {
  try{
    const comment = await User.create(req.body)
    res.json({
      success:true,
      comment
    })
  }catch(err){
    res.json(err)
  }
})



app.listen(3010, () => {
    console.log('port:', 3010)
})
