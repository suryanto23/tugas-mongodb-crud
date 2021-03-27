const mongoose = require('mongoose');

const OriginSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    process : String,
    roast : String
});

const Origin = mongoose.model("origin" , OriginSchema);

module.exports=Origin;