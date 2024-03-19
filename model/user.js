let mongoose = require('mongoose')
let schema = new mongoose.Schema({
    Email : {
        type : String,
        require : true
    },
    Password :{
        type : String,
        require : true
    }
})

module.exports = mongoose.model('user', schema)