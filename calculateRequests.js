const express = require("express")

const app = express();
let numberOfRequests=0;
function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests)
    next();
}

app.get("/something",calculateRequests,function(req,res){

})

app.listen(3000);