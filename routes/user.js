const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const router = express.Router()
const usermodel = require('../model/user')

app.use(express.urlencoded({extended : true}))
app.use = (bodyparser.json())

router.post('/login', async(req,res)=>{
    try{
        const {Email, Password} = req.body
        let checkuser = await usermodel.find({Email:Email})
        if(checkuser.length >0){
            return res.json({
                message : "user already exist"
            })
        }else{
            let userdata = await usermodel.create({Email:Email,Password:Password})
            return res.json({
                message :"user created ",
                data : userdata
            })
        }
    }catch(Err){
        return res.status(500)
    } 
})
module.exports = router