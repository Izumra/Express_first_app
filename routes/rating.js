import express from "express"

const router=express.Router()
router.get('/',(req,res)=>{
    res.render('Rating',{title:"rating"})
})

export default router