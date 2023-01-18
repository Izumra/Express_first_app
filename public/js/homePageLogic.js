const loginBtn=document.getElementsByClassName("fullName")
const backGroundForm=document.getElementsByClassName("wrap-popup")[0]
const changeForms=document.getElementsByClassName("changeForm")[0]
const changerForms=document.getElementsByClassName("changerForm")[0]
const loginForm=document.getElementsByClassName("logPopup")[0]
const registrateForm=document.getElementsByClassName("regPopup")[0]


loginBtn[0].addEventListener('click',(e)=>{
    backGroundForm.classList.remove('hide')
    loginForm.classList.remove('hide')
})
backGroundForm.addEventListener('click',(e)=>{
    if(e.target.classList.contains('wrap-popup'))backGroundForm.classList.add('hide')
})
changerForms.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="Войти"){
        registrateForm.classList.add('hide')
        loginForm.classList.remove('hide')
    }
    else{
        loginForm.classList.add('hide')
        registrateForm.classList.remove('hide')
    }
})
changeForms.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="Войти"){
        registrateForm.classList.add('hide')
        loginForm.classList.remove('hide')
    }
    else{
        loginForm.classList.add('hide')
        registrateForm.classList.remove('hide')
    }
})