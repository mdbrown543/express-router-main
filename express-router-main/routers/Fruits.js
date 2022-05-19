
const express = require("express")
const router = express.Router()
 
// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.route("/")
.get((req,res)=>{
    res.json(fruits)
})


router.route("/:id")
.get((req,res)=>{
    let id = req.params.id-1
    res.json(fruits[id]);
})

 
module.exports = router;