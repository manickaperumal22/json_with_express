const fs=require("fs");
const users=require("./file.json")


const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

// app.get("/post",(req,res)=>{
//    fs.readFile(`${__dirname+"/file.json"}`,"utf8",(err,content)=>{
//        let data=JSON.parse(content)
//        data.push(req.query["email"])

//        fs.writeFile(`${__dirname+"/file.json"}`,JSON.stringify(data),(err)=>{
//            if(err) throw err
//        })
//    })


// })
app.get("/post",(req,res)=>{

    user={"email":req.query["email"]}
    users.push(user);

    fs.writeFile(`${__dirname+"/file.json"}`,JSON.stringify(users),(err)=>{
        if(err) throw err;
        console.log("writing");
    })

})

app.listen(8080);