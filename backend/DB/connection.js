const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://chriz:chriz@cluster0.qwdfjr4.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})