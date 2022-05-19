
const express = require("express")
const router = express.Router()
 
// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.route("/")
.get((req,res)=>{
    res.json(users)
})

router.route("/:id")
.get((req,res)=>{
    let id = req.params.id-1
    res.json(users[id]);
})


module.exports = router;