const bcrypt = require('bcrypt')
module.exports = {
    hash: (value) => {
        return bcrypt.hash(value,10)
    },
    verify: async (value, token) => {
        return await bcrypt.compare(value,token)
    }
}