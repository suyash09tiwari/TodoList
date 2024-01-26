const express = require('express');
const router = express.Router();
const Todo=require("../models/Todo")


//routes will be here
router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    const newTodo=new Todo({todo});
    //save
    newTodo.save()
    .then(()=>{
        res.redirect("/");
    })
    .catch((e)=>{
        console.log(e);
    })
})
.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("success!!")
        res.redirect("/")
    })
    .catch((e)=>{
        console.log(e);
    })
})
module.exports=router;