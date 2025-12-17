const express = require("express")
const pool = require("../db/pool")
const result = require("../utils/result")

const router = express.Router()

router.get("/",(req,res) => {
    const sql = `SELECT * FROM students`
    pool.query(sql, (error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.post("/",(req,res) => {
    const {reg_no,name,email,course_id,mobile_no,profile_pic} = req.body
    const sql = `INSERT INTO students(reg_no,name,email,course_id,mobile_no,profile_pic) values(?,?,?,?,?,?)`
    pool.query(sql,[reg_no,name,email,course_id,mobile_no,profile_pic],(error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.put("/",(req,res) => {
    const {mobile_no,reg_no} =req.body
    const sql = "update students set mobile_no= ? where reg_no= ?"
    pool.query(sql,[mobile_no,reg_no],(error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.delete("/",(req,res) => {
    const {reg_no} =req.body
    const sql = "delete from students where reg_no = ?"
    pool.query(sql,[reg_no],(error,data) => {
        res.send(result.createResult(error,data))
    })
})

module.exports = router