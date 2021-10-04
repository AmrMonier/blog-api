const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const fs = require('fs');
const publicKey = fs.readFileSync('./keys/public.key', 'utf-8')
const privateKey = fs.readFileSync('./keys/private.key', 'utf-8')
module.exports = {
    generateVerificationToken: () =>  crypto.randomBytes(32).toString('hex'),
     generateToken: async (payload, expiration) => {
        const options = {
            expiresIn: expiration,
            algorithm: 'RS256'
        }
        return await jwt.sign(payload, privateKey, options)
      
    },
    verifyToken: async (token, expiration) => {
        const options = {
        expiresIn: expiration,
        algorithm: 'RS256'
    }
        try {
            return await jwt.verify(token, publicKey, options)
        } catch (error) {
            return false
        }
    },
    decodeToken: async (token) => {
            jwt.decode(token)
    }
}