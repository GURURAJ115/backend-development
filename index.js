const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username == "gururaj" && password =="pass"){
        if(kidneyId==1|| kidneyId==2){
            res.json({
                msg: "Your kidney is fine"
            })
        }
    }
    res.status(400).json({"msg":"Something is up with your inputs"})
});

app.listen(3000);