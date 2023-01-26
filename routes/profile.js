import express from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('Participants',{title:"Profile",user:null})
})

export default router