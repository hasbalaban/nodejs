const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    userName : {
        type : String,
        require : true
    },
    userSurName : {
        type : String,
        require : false
    },
    points : {
        type : String,
        require : true,
        default  : 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User