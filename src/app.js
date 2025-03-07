const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
 const port= 5000;

 //public static//
 const static_path= path.join(__dirname,"../public");
 const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set("views",templates_path);
hbs.registerPartials(partials_path);

 app.set("view engine","hbs");
 app.use(express.static(static_path));
 //routing
 app.get("",(req,res)=>{
    res.render("index")
 })
 app.get("/about",(req,res)=>{
    res.render("about")
 })
 app.get("/whether",(req,res)=>{
    res.render("whether")
 })
 
 app.get("*",(req,res)=>{
    res.render("404eror page")
 })
 
app.get("",(req,res)=>{
    res.send("welcome to the website")

})
app.listen(port,()=>{
    console.log(`listening the port at ${port}`);
})