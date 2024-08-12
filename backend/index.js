const express = require('express')
const connectDb = require('./configure/db')
const cors = require('cors')


//routes

const Users = require('./routes/users-routes')
// const auth = require('./routes/auth-routes')

connectDb()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/Users',Users)
// app.use('/api/v1/auth',auth)


app.listen(5000,()=>{
    console.log(`server running on this port:-${5000}`)
})