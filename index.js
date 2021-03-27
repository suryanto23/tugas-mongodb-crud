const express = require('express');
const app = express();
const cors = require('cors');
const { PORT , dbConfigMongo } = require('./config')
const originRouter = require('./routes/OriginController')
const localPort  = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use(originRouter)


app.get("/" , (req,res)=>{
    res.send("hello")
})

if(dbConfigMongo){
    // This function will triggered first if connection sucsess 
    app.listen(PORT , ()=>{
        console.log("Trigerring server on port" ,PORT)
        console.log("Mongo DB Connected")
    })
} else {
    console.log("Mongo not connected")
}
