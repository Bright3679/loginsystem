const express =  require('express')
const bodyparser = require('body-parser')
const userroute = require('./routes/user')
const app = express()
const mongoose = require('mongoose')
const databaseurl = 'mongodb://localhost:27017/logindata'
mongoose.connect(databaseurl)
    .then(()=> console.log('connected to mongodb'))
    .catch(error =>console.error('error connection fail', error))

const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended : true}))
app.use(bodyparser.json())
app.use('/users', userroute)
http.listen( PORT ,()=>{
    console.log("lisning on ...", PORT)
})

app.get('/', (req,res)=>{
    res.send("hello i am alive")
})