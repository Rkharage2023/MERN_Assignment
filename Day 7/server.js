const express = require('express')
const userR = require('./routes/user')
const authUser = require('./utils/auth')

const app = express()

app.use(express.json())
app.use(authUser)
app.use('/users',userR)

app.listen(4500,'localhost',()=>{
    console.log("server started at port 4500");
})