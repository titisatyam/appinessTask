const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:false
    },
    role:{
        type:String
    }
});

module.exports = Users = mongoose.model("users", User);