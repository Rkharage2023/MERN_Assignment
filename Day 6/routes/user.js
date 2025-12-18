const express = require('express');
const pool = require('../db/pool');
const result = require('../utils/result');
const cryptojs = require('crypto-js');

const router = express.Router();

router.post('/signup', (req, res) => {
    const { name, email, password, mobile } = req.body
    const sql = `INSERT INTO users(name,email,password,mobile) VALUES (?,?,?,?)`
    const hashedPassword = cryptojs.SHA256(password).toString()
    pool.query(sql, [name, email, hashedPassword, mobile], (error, data) => {
        res.send(result.createResult(error, data))
    })  
})

router.get('/', (req, res) => {
    const { email } = req.query
    const sql = `SELECT * FROM users WHERE email = ?`
    pool.query(sql, [email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.delete('/:uid', (req, res) => {
    const uid = req.params.uid
    const sql = `DELETE FROM users WHERE uid = ?`
    pool.query(sql, [uid], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router;