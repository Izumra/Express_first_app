import express from "express"

const port=2000
const app=express()
app.set('view engine','ejs')
app.use(express.static("public"))

app.get('/',(req,res)=>res.render('homePage',{title:"Home page",user:null}))
app.get('/Participants',(req,res)=>res.render('Participants',{title:"Participants page",user:null}))
app.get('/Rating',(req,res)=>res.render('Rating',{title:"Rating page",user:null}))

app.listen(port)


//tests
console.log("Server is starting")