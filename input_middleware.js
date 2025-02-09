const express = require("express");

const app = express();

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username == "gururaj" && password =="pass"){
        next();
    }
    else{
        res.status(400).json({
            msg:"Incorrect Input"
        })
    }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId==1|| kidneyId==2){
        next();
    }
    else{
    res.status(400).json({ msg:"Incorrect Input"
    })
    }
}
app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){

    res.send("Your heart is healthy");
});

app.listen(3000);