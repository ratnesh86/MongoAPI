var express=require('express');
var route=express.Router();
var companies=require('../schema/schema');
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
module.exports=route;