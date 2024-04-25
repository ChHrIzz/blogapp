const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
PORT = 3008;
const userRoute = require('./Routes/userRoutes')
const postRoute = require('./Routes/postRoute')

const app = express();
app.use(morgan('dev'));
app.use(cors());
require('./DB/connection')
app.use('/api',userRoute);
app.use('/api',postRoute);



app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
})