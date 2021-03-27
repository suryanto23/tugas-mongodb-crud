const express = require('express');
const {Origin} = require('../models');

const app = express();

app.get("/origin" , async (req,res)=>{

      try {
        const origin = await Origin.find({})
        res.send(origin)
    } catch (e) {
        console.log("gagal " ,e);
        res.status(500).send(err)
    }

});

app.get("/origin/:id" , async (req,res)=>{
    
    try {
        const origin = await Origin.findById(req.params.id)
        res.send(origin)
    } catch (e) {
        console.log(e);
        res.status(500).send(err)
    }
    
});

app.post("/origin" , async (req,res)=>{

    try {
        const newVal = await Origin.create(req.body)
        console.log("data baru adalah " ,newVal)
        res.send(newVal)
    } catch (e) {
        console.log(e);
        res.status(500).send(err)
    }

});

app.delete("/origin/:id" , async (req,res)=>{
    
    try {
         // got target id
        const originID = await Origin.findById(req.params.id)
        const deleteVal = await Origin.deleteOne({ _id:originID })
        res.send(deleteVal)
    } catch (e) {
        console.log(e);
        res.status(500).send(err)
    }
    
});

app.put("/origin/:id" , async (req,res)=>{
    
    try {
         // got target id
        const originID = await Origin.findById(req.params.id)
        const newVal = req.body
        const updateVal = await Origin.updateOne({_id:originID},newVal)
        res.send(updateVal)
    } catch (e) {
        console.log(e);
        res.status(500).send(err)
    }
    
});

module.exports = app;