const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;
//console.log(__dirname+"/bmiCalculator.html");
app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");

});

app.post("/bmicalculator",(req,res)=>{
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);
    const bmi = weight/(height*height);
    res.send(`Your bmi is ${bmi}`);
});


app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});