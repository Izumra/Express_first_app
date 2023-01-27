import express from 'express'
import {clientConnection, signQuerry} from '../backend/connector.js'

const router=express.Router()

router.get('/',(req,res,)=>{
    res.render('homePage',{title:"Home page",user:null})
})
router.post('/',async (req,res)=>{
    console.log(req.body.email)
    let data = await signQuerry(req.body.email,req.body.password)
    if(data){
        res.redirect('/participants')
    }
    else{
        res.redirect('/')
    }
})

export default router