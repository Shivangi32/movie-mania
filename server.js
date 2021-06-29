var express=require("express");
var app=express();

app.use(express.static("public"));
app.get("/verify",(req,res)=>{
  res.sendFile(__dirname+"\\public\\vercon.html");
})

app.get("/response",(req,res)=>{
  res.sendFile(__dirname+"\\public\\response.html");
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\public\\project.html");
})

var list=["saina","end game","conjuring","dear comrade"];
app.get("/find",(req,res)=>{
    var movie=req.query.search;
    movie=movie.toLowerCase();
    console.log(list.indexOf(movie));
    if(list.indexOf(movie)!=-1)
    {
      var idx=list.indexOf(movie);
      switch(idx)
      {
        case 0:res.redirect("hindi.html");break;
        case 1:res.redirect("english.html");break;
        case 2:res.redirect("horror.html");break;
        case 3:res.redirect("tamil.html");break;
      }
    }
    else 
      res.redirect("project.html");
})
app.listen(4000,function(){
    console.log("Listening to movie port");
})