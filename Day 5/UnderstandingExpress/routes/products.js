const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("All users data")
})

router.get("/profile", (req, res) => {
    res.send("user profile")
})

router.post("/signup", (req, res) => {
    res.send("signup user")
})

router.post("/signin", (req, res) => {
    res.send("signin data")
})

router.put("/", (req, res) => {
    res.send("Edit user data")
})

router.delete("/", (req, res) => {
    res.send("Delete user data")
})


module.exports = router