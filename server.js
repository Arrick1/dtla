const express = require("express")
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const session = require("express-session")
require('dotenv').config()



const authRouter = require('./routes/auth')


app.use(cors())
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


app.listen(3010, () => {
    console.log('port:', 3010)
})
