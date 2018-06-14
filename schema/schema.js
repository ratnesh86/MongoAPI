var mongoose=require('mongoose');

var companies = mongoose.model('companies', new mongoose.Schema(            //creating a collection. Model name is comapnies. we are defnining a schema in this collection
    {
        name:String,
        number_of_employees:Number,
        founde_year:Number,
        overview:String,
        total_money_raised:String,
        offices:
        {city:String,address1:String,address:String,zip_code:String}

    }
),
'companies');

module.exports=companies;