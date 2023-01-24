import express from "express"
import dotenv from "dotenv"
import connection from "./public/backend/connector.js"

const port=2000
const app=express()
dotenv.config()


app.set('view engine','ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res,)=>{
    res.render('homePage',{title:"Home page",user:null})
})
app.post('/',async (req,res)=>{
    console.log(JSON.stringify(req.body.email))
    let data= await connection("select * from schema1.themes_hackaton")
    console.log(data.count)
    console.log(data.data[0])
    res.redirect('/')
})

app.get('/Participants',(req,res)=>res.render('Participants',{title:"Participants page",user:null}))
app.get('/Rating',(req,res)=>res.render('Rating',{title:"Rating page",user:null}))

app.listen(port)


//tests
console.log("Server is starting")