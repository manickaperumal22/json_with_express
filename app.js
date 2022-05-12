const fs=require("fs");


const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

// app.get("/post",(req,res)=>{
//     res.send("posted succesfully");
//     var value=req.query["email"]
//     value1=JSON.stringify(value);
//     fs.writeFile(`${__dirname}/file.json`,'id={"email":'+value1+"}",(err)=>{
//         if(err)throw err
//     })
// })
// fs.readFile(`${__dirname}`+"/file.json","utf8",(err,content)=>{
//     if(err)throw err
//     console.log(content);
// })

app.get("/post",(req,res)=>{

  fs.appendFile(`${__dirname}`+"/file.json",JSON.stringify(req.query["email"]),(err)=>{
    if(err)throw err
})

});

app.listen(8080);