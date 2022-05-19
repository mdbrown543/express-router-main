const {check,validationResult} = require("express-validator")
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
.post([check("color").not().isEmpty().trim()],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    }
    fruits.push(req.body)
    res.json(fruits)
})


router.route("/:id")
.get((req,res)=>{
    let id = req.params.id-1
    res.json(fruits[id]);
})
.put([check("color").not().isEmpty().trim()],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    }
    let id = req.params.id-1
    fruits[id] = req.body
    res.json(fruits[id])
})
.delete((req,res)=>{
    let id = req.params.id-1
    let removed = fruits.splice(id,1)
    res.json("This was removed:" + removed)
})


 
module.exports = router;