import express from 'express'
import { clientConnection, signQuerry } from '../backend/connector.js'
import { sendMail } from '../public/js/sendlerMail.js'
import cookieParser from 'cookie-parser'
import { userConnecting } from '../backend/profile.js'

const router = express.Router()

router.use(cookieParser())

router.get('/', async(req, res,) => {
    if (res.cookie.email) {
        let data=await userConnecting('select * from schema1.participant where email=$1',[res.cookie.email])
        res.render('homePage', {title:'Home page', user:{...data}})
    }
    else res.render('homePage', { title: "Home page", user: null })
})

router.get('/logout', (req, res) => {
    res.clearCookie('email')
    res.redirect('/')
})

router.post('/', async (req, res) => {
    if (req.body) {
        let data = await signQuerry(req.body.email, req.body.password)
        if (data&&!req.body?.firstName&&!req.body?.firstName) {
            let date = new Date()
            date.setHours(date.getHours() + 5)
            res.cookie('email', data.email, {
                secure: true,
                httpOnly: true,
                expires: date
            })
            //НЕ РАБОТАЕТ БЕЗ ИНТЕРНЕТА
            //sendMail(req.body.email, 'Вы успешно зарегестрированы', 0)
            res.redirect('participants')
        }
        else if(data&&(req.body.firstName||req.body.secondName)){
            res.redirect('/')
        }
        else if(!data&&req.body.firstName&&req.body.secondName){
            let date = new Date()
            date.setHours(date.getHours() + 5)
            res.cookie('email', req.body.email, {
                secure: true,
                httpOnly: true,
                expires: date
            })
            res.redirect('verification')
        }
        else {
            res.redirect('/')
        }
    }
    else {
        res.redirect('/')
    }
})

router.get('/verification', (req,res)=>{
    res.render('verification',{title:'Verification'})
    const sendlerNum = 10000 + Math.random() * (90000 + 1 - 10000)
    //Не работает без интернета.
    //sendMail(res.cookie.email, '', Math.floor(sendlerNum))
})

router.post('/verification',(req,res)=>{
    if(req.body.kod==sendlerNum){
        console.log('Ваша почта подтверждена')
        res.redirect('participants')
    }
    else{
        res.redirect('verification')
    }
})

export default router