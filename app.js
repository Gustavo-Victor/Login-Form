/*pegar campo email e senha pelo ID*/
var email = window.document.getElementById("email")
var senha = window.document.getElementById("senha")

//mudar cor da bordar quando usuário estiver digitando nos campos
email.addEventListener('focus', ()=>{
    email.style.borderColor = '#4a5f6a'
})

senha.addEventListener('focus', ()=>{
    senha.style.borderColor = '#4a5f6a'
})


//voltar para a cor original da borda 
email.addEventListener('focusout', ()=>{
    email.style.borderColor = 'lightsteelblue'
})


senha.addEventListener('focusout', ()=>{
    senha.style.borderColor = 'lightsteelblue'
})
