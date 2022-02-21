const { application } = require('express')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//Middleware

app.get('/', (req, res)=>{
    res.sendfile('./public/index.html')
})

app.listen(port)