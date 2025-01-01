const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())

app.post('/conversations',(req,res)=>{
    console.log(req.body);
    res.send("Something Something")
})
app.get('/route-handler',function(req,res){
    res.json({
        name:"Gururaj",
        age:23
    })
})
app.get('/',function(req,res){
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log('Example app listening on port '+port)
})