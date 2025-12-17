const express = require("express")
const userRouter = require("./routes/users")
const productRouter = require("./routes/products")
const orderRouter = require("./routes/orders")

const app = express()

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/orders", orderRouter)

app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})