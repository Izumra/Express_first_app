import express from 'express'
import connection from '../backend/connector.js'

const router=express.Router()

router.get('/',(req,res,)=>{
    res.render('homePage',{title:"Home page",user:null})
})
router.post('/',async (req,res)=>{
    console.log(JSON.stringify(req.body.email))
    let data= await connection("select * from schema1.themes_hackaton")
    console.log(data.count)
    console.log(data.data[0])
    res.redirect('/')
})

export default router