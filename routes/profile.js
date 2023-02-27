import express from 'express'
import cookieParser from 'cookie-parser'
import {userConnecting} from '../backend/profile.js'
import { ListBucketsCommand } from '@aws-sdk/client-s3'
import {uploadPhoto,getPhoto} from '../backend/YandexCon.js'

const router=express.Router()

router.use(cookieParser())

router.get('/',async(req,res)=>{
    if(req.cookies.email){
        const data=await userConnecting('select * from schema1.participant where email=$1',[req.cookies.email])
        res.render('Participants',{title:"User page",user:{...data}})
        try{
            // const image=await YandexCloud.send(new ListBucketsCommand({}))
            // console.log(image.Buckets)
            // return image
        }catch(err){
            console.log(err)
        }
    }
    else res.redirect('/')
})

export default router