//models
const User = require('../../models/Users')


const findUserById = (req,res) => {
    const id = req.params.id
    if (id == null) res.send("not found")
    User.findById(id)
    .then((result) =>{

        const errorResponse = {
            code : 200,
            name : "error",
            message : "no error error error",
        }

        const response = {
            isSuccess : true,
            data : result,
            message : "message message message ddd",
            error : errorResponse,
            dateTime : result.dateTime
        }


        res.send(response)

    })
    .catch((error) => {
        console.log(error)
    })
}

const saveNewUser = (req, res) => {
    const body = req.body
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
    }) //const user = new User(body)


    user.save()
    .then((result) => {
    const datestamp = Date.parse(result.createdAt) / 1000;
    const data = {
        userName : result.userName,
        userSurName : result.userSurName,
        points : result.points
    }

    res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
}

const deleteUserById = (req,res) => {
    const id = req.params.id
    if (id == null) res.send("user not found")
    User.findByIdAndDelete(id)
    .then((result) =>{
        if(result == null){
             return res.send("user not exist")
        }

        return res.json(result)
    })
    .catch((error) => {
        console.log(error)
    })
}


const getAllUsersAndSortByPoints = (req,res) => {
    User.find().sort({points: -1})
    .then((result) =>{

        const errorResponse = {
            code : 200,
            name : "error",
            message : "no error error error",
        }

        const response = {
            isSuccess : true,
            data : result,
            message : "message message message ddd",
            error : errorResponse,
            dateTime : result.dateTime
        }

        res.send(response)
    })
    .catch((error) => {
        console.log(error)
    })
}


module.exports = {
    findUserById,
    saveNewUser,
    deleteUserById,
    getAllUsersAndSortByPoints
}