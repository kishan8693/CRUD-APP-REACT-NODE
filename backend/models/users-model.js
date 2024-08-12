const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
    },
    work:{
        type:String,
        required:true
    },
    add:{
        type:String
    },
    desc:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Users',UsersSchema)