const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongodbUrl = "mongodb+srv://hasbalaban:158820015Hn@cluster0.4tnhrpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const user = require('./models/Users')
const User = require('./models/Users')

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




app.get('/add', (req,res) => {

    const user = new User({
        userName : "salih",
        userSurName: "balaban",
        points : "5"
    })
    user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
    
    res.end
})

app.get('/allUsers', (req,res) => {

    user.find().sort({points: -1})
    .then((result) =>{
        res.send(result)
    })
    .catch((error) => {
        console.log(error)
    })
})

app.get('/findUser', (req,res) => {
    user.findById("660c7039353a0e8b768e38fd")
    .then((result) =>{
        res.send(result)
    })
    .catch((error) => {
        console.log(error)
    })
})

app.get('/', (req,res) => {
    res.write('<h1>Mongo Db</h2>')
    //res.statusCode = 404
    res.end
})


app.get('/findUserById/:id', (req,res) => {
    const id = req.params.id
    if (id == null) res.send("not found")
    user.findById(id)
    .then((result) =>{
        res.send(result)
    })
    .catch((error) => {
        console.log(error)
    })
})


app.post('/newUser', (req, res) => {
    const body = req.body


   // console.log(req)
    console.log(body)

    const userName = body.userName
    const userSurName = body.userSurName
    const points = body.points

    if(userName == null || userSurName == null || points == null) {
        return res.status(406).send("wrong body");
    }


    const user = new User({
        userName : userName,
        userSurName: userSurName,
        points : points
    }) 
    //const user = new User(body)



    user.save()
    .then((result) => {

    const datestamp = Date.parse(result.createdAt) / 1000;

    const data = {
        userName : result.userName,
        userSurName : result.userSurName,
        points : result.points,
        createdAt : datestamp
    }

        res.send(data)
    })
    .catch((error) => {
        console.log(error)
    })
})