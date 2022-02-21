const express = require('express')
require("dotenv").config()
const app = express()
let port = process.env.PORT || 3000

//Middleware
const path = require('path')
const staticPath = path.join(__dirname, './public')
app.use(express.static(staticPath))

app.get("/", (req, res)=>{
    res.send("Home Page")
})
app.get("/services", (req, res)=>{
    res.send("Services page")
})


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})