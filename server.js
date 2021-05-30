var express=require("express");
var app=express();

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\public\\project.html");
})
app.listen(8000,function(){
    console.log("Listening to movie port");
})