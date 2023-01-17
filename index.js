import express from "express"

const port=2000
const app=express()
app.set('view engine','ejs')
app.use(express.static("public"))

app.get('/',(req,res)=>res.render('homePage',{title:"Home page"}))
app.listen(port)