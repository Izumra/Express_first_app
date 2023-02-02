import express from 'express'
import cookieParser from 'cookie-parser'
import {userConnecting} from '../backend/profile.js'

const router=express.Router()

router.use(cookieParser())

router.get('/',async(req,res)=>{
    if(req.cookies.email){
        const data=await userConnecting('select * from schema1.participant where email=$1',[req.cookies.email])
        res.render('Participants',{title:"User page",user:{...data}})
    }
    else res.redirect('/')
})

export default router