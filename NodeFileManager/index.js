const express=require("express")
const exists=require("fs")   
const bodyParser=require("body-parser")
const path=require("path")
const fs=require("fs").promises

const app=express()

app.use("/assets", express.static("assets"))

app.get("/",(req,res)=>{
 
    res.send('<h1> WELCOME TO NODE APP</h1>')

});

app.get("/create",async(req,res)=>{

    let filename = req.query.filename;
    let content = req.query.content;

    const fullpath = path.join(
        __dirname,
        "assets",
        filename.toLocaleLowerCase() + ".txt"
    );

    console.log(`FILE IS ${filename} AND NAME IS ${content}`);
    await fs.writeFile(fullpath,content)
    res.send('<h1>FILE CREATED SUCCESSFULLY</h1>')

});


app.listen(3000)