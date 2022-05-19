const express = require("express")
const app = express()
const port = 3000
const usersRouter = require("./routers/Users")
const fruitsRouter = require("./routers/Fruits")
 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/Users", usersRouter)
app.use("/Fruits", fruitsRouter)



// Express Routes
/*app.route("/routers/Users ? /routers/allUsers")
.get((req,res)=>{
    res.send()
})
.get((req,res)=>{
    res.send()
})*/

app.get("/",(req,res)=>{
    res.send("Successful ROOT GET Request")
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})