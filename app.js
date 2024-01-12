const express=require("express");
const mongoose=require("mongoose");

const port=3000;
const app=express();

//connect to mongodb
mongoose.connect("mongodb://localhost/todo_app");
//connecting middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})