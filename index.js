const express = require('express')
const mongoose = require('mongoose')
const ItemRouter = require('./server/routers/items.api')
require('dotenv').config()
const path = require("path")
const app = express()
const mongoUri = process.env.MONGODB_URI
mongoose
.connect(mongoUri)
    .then(() => console.log("conected to database"))
    .catch((err) => { console.log(err.toString()) })
    app.use(express.static(path.join(__dirname,"dist"))) 

app.use(express.json())
app.use('/item', ItemRouter)


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`example app listening on port ${PORT}!`));  