const express = require("express")

const app = express();
let numberOfRequests=0;
function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests)
    next();
}

app.use(calculateRequests)  // anything after this line will include this middleware
app.use(express.json())// most used middleware

app.post("/something",function(req,res){
    console.log(req.body)//express.json() because body will be accepting json as an input.
    res.json({msg:"hi there"})
})
app.get("/anything",function(req,res){

})

app.listen(3000);