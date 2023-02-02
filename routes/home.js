import express from 'express'
import {clientConnection, signQuerry} from '../backend/connector.js'
import cookieParser from 'cookie-parser'

const router=express.Router()

router.use(cookieParser())

router.get('/',(req,res,)=>{
    res.render('homePage',{title:"Home page",user:null})
})
router.get('/logout',(req,res)=>{
    res.clearCookie('email')
    res.redirect('/')
})
router.post('/',async (req,res)=>{
    let data = await signQuerry(req.body.email,req.body.password)
    if(data){
        let date=new Date()
        date.setHours(date.getHours()+5)
        res.cookie('email',data.email,{
            secure:true,
            httpOnly:true,
            expires:date
        })
        res.redirect('participants')
    }
    else{
        res.redirect('/')
    }
})

export default router