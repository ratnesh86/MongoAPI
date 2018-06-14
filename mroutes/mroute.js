var express=require('express');
var route=express.Router();
var companies=require('../schema/schema');

//object which is matching the company name exactly
//the URL here would be http://localhost:4780/mongo-api/companies/Zentact where Zentact is the name of the company. 
//URL matches with 1st statement below i.e. /companies/:name
route.get('/companies/:name',function(request,response)
{
    let name=request.params.name;
    console.log("inside");
    companies.find({name: name},function(err,data)
        {
            if(err)
                {
                response.json({});
                console.log(err);
                }
            else
                {
                response.json(data);
                console.log("success");
                }
        });
});

//Emit json array of names of comapnies matching a pattern
//the URL here would be http://localhost:4780/mongo-api/cnames/Zentact where Zentact is the name of the company. 
//Difference here is the URL that we have changed from companies to cnames
//also, even we can seng regular expression in the URL to get the data as per regex
//So, URLs can be:
//1. http://localhost:4780/mongo-api/cnames/^Zen     -- to return all company data starting wwith company name starting with Zen
//2. http://localhost:4780/mongo-api/cnames/Zen*t
//URL matches with 1st statement below i.e. /companies/:name
route.get("/cnames/:pattern",function(request,response)
{
companies.find({name:{$regex:request.params.pattern,$options:'i"'}},{_id:0,name:1},function(err,data){    //i - ignoring the case. 
    if(err)
        response.json({});
    else
        response.json(data);
})                
});

route.put("/empcount/:name",function(request,response){
    let cname=request.params.name;
    companies.update({name:cname},{$set:request.body},function(err,data){
        if(err)
            response.send({result:"Not updated"});
            response.send({result:"Successfully updated"});
    });
});

module.exports=route;