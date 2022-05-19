
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
.post((req,res)=>{
    users.push(req.body)
    res.json(users)
})

router.route("/:id")
.get((req,res)=>{
    let id = req.params.id-1
    res.json(users[id]);
})
.put((req,res)=>{
    let id = req.params.id-1
    users[id] = req.body
    res.json(users[id])
})
.delete((req,res)=>{
    let id = req.params.id-1
    let removed = users.splice(id,1)
    res.json("This was removed:" + removed)
})


module.exports = router;