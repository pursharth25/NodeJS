const express=require("express");
const mongoose=require("mongoose");

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO THE NODEJS WITH MONGO DB CONNECTION DEMO</h1>')
})

mongoose.connect(
    'mongodb://mongo:27017/innovaccer',
    { useNewUrlParser:true },
    (err)=>{
        if (err){
            console.log("=========== Error connecting to the database");
            console.log(err);
        }
        else{
            console.log("================ Connection successful");
            app.listen(3000);
        }
    }
    
);

