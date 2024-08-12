const mongoose = require('mongoose')

const  connectDb = async()=>{
    const connection = await mongoose.connect("mongodb://localhost:27017/myapp",{

    })
    console.log(`mongoDb connected:-${connection.connection.host}`)
    
}

module.exports = connectDb