import express from "express"
import dotenv from "dotenv"
import router from "./routes/GRouter.js"

const port=1000
const app=express()
dotenv.config()


app.set('view engine','ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
router(app)

app.get('/Rating',(req,res)=>res.render('Rating',{title:"Rating page",user:null}))

app.listen(port)


//tests
console.log("Server is starting on address: http://localhost:1000/")