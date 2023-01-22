import express from "express"
import dotenv from "dotenv"
import connection from "./public/backend/homePage.js"

const port=1000
const app=express()
dotenv.config()
app.set('view engine','ejs')
app.use(express.static("public"))

app.get('/',(req,res,)=>{
    res.render('homePage',{title:"Home page",user:null})
    connection()
})

app.get('/Participants',(req,res)=>res.render('Participants',{title:"Participants page",user:null}))
app.get('/Rating',(req,res)=>res.render('Rating',{title:"Rating page",user:null}))

app.listen(port)


//tests
console.log("Server is starting")