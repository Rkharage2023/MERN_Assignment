const jwt = require('jsonwebtoken')

const result = require('./result')
const config = require('./config')

function authUser(req,res,next){
    const path = req.url
    if(path == '/users/signup' || path == '/users/signin')
        next()
    else{
        const token = req.header.token
        if(!token){
            res.send(result.createResult('Token is missing'))
        }
        else{
            try {
                const payload = jwt.verify(token, config.SECRET)
                req.header.payload = payload
            } catch (ex) {
                res.send(result.createResult('Token is Invalid'))
            }
        }
    }
}

module.exports = authUser