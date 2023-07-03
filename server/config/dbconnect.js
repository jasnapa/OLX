const mongoose = require('mongoose')

const dbconnect=()=>{
    mongoose.connect('mongodb://localhost:27017/olx').then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=dbconnect;