import nodemailer from "nodemailer"

let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'bigorg56@gmail.com',
        pass:'cdbfzmsuijkgvhnq'
    }
})

const sendMail=(to,message,kod)=>{
    let mailDetail={
        from:'bigorg56@gmail.com',
        to:to,
        subject:'Регистрация',
        text:message=='Вы успешно зарегестрированы'?message:`Отправьте данный код регистрации для подтверждения почты: ${kod}`
    }
    
    transporter.sendMail(mailDetail)
}

export {sendMail}