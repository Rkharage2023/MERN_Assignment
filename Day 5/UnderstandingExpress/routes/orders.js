const express = require("express")
const router = express.Router()

router.get("/orders", (req, res) => {
    res.send("All orders data")
})

router.post("/orders", (req, res) => {
    res.send("Add orders data")
})

router.put("/orders", (req, res) => {
    res.send("Edit orders data")
})

router.delete("/orders", (req, res) => {
    res.send("Delete orders data")
})


module.exports = router