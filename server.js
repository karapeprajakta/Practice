var express =require('express');
var app=express();
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.send("Welcome to our server");
});
app.get("/product",(req,res)=>{

    var p={
        "id":45,
        "title":"Gerbera",
         "discription":"wedding flower",

        " price":500,

       "qyantity":800
        }
        res.send(p);
});

app.listen(8000);
console.log("server is running on port 8000");