var express=require('express');
var app=express();

var bodyParser=require('body-parser');
var mroute=require('./mroutes/mroute')

app.use(bodyParser.json());

var mongoose=require('mongoose');                       //to connect DB
mongoose.connect('mongodb://localhost/capgemini');      //this capgemini is the tablespace

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
    console.log("mongo db connection is open ");
});

app.listen("4780",function(){
    console.log("server is running on 4780");
})

app.use("/mongo-api",mroute);

app.get("/mongo-api",function(request,response)
{
//    response.send("HOMEPAGE");
    console.log("success");
});