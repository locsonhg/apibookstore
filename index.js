const express = require('express')
const app = express()
// const cors = require("cors")
var bodyparser = require("body-parser")
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authorRouter = require("./routes/author")
const bookRouter = require("./routes/book")

dotenv.config()
//conect database 
mongoose.connect((process.env.MONGODB_URL_CONECT),()=>{
    console.log("Ket noi thanh cong")
});
app.use(bodyparser.json({limit: "50mb"}))
// app.use(cors)
app.use(morgan('common'))


// khai bao cac router
app.use("/v1/tacgia", authorRouter)
app.use("/v1/sach", bookRouter)

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    
})
