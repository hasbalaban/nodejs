const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongodbUrl = "mongodb+srv://hasbalaban:158820015Hn@cluster0.4tnhrpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//routes
const userRoutes = require('./routes/userRoutes')


app.use(express.urlencoded({extended : true}))
app.use(express.json())


mongoose.connect(mongodbUrl)
.then((result) => {
    console.log("connected!")
    app.listen(3000)
})
.catch((err) => {
    console.log("error!")
})

app.get("/", (req, res) => {
    res.send("wrong request contact to this 'hasan-balaban@hotmail.com' ")
})

app.use('/user',userRoutes)
