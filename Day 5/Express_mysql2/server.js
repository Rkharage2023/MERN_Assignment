const express = require("express")
const studentRouter = require("./routes/student")
const app = express()

app.use(express.json())
app.use('/students',studentRouter)

app.listen(4009,'localhost',() => {
    console.log("server started ar port 4000");
})