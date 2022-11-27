let login = document.querySelector("#inputEmail")

let mensagemLogin = document.querySelector("#emailLogin")

let mensagemSenha = document.querySelector("#senhaLogin")

let senha = document.querySelector("#inputPassword")

let botao = document.querySelector("#botaoAcessar")

let validacaoEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function emailValida(){
        if(validacaoEmail.test(login.value)){
            login.style.borderColor = "green"
            mensagemLogin.style.display = "none"
            validar()
        }else{
            login.style.borderColor = "red"
            mensagemLogin.style.display = "block"
            naoValidado()
        }
    login.addEventListener("blur", function(){
        if(validacaoEmail.test(login.value)){
            login.style.borderColor = "#f2f2f2"
        }
        else{
            login.style.borderColor = "red"
            mensagemLogin.style.display = "block"
            naoValidado()
        }
    })
    login.addEventListener("focus", function(){
        if(validacaoEmail.test(login.value)){
            login.style.borderColor = "green"
        }
        else{
        login.style.borderColor = "red"
        mensagemLogin.style.display = "block"
        naoValidado()
        }
        
    })
}


let validacaoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

function senhaValida(){

        if(validacaoSenha.test(senha.value)){
            senha.style.borderColor = "green"
            mensagemSenha.style.display = "none"
            validar()
        }
        else{
            senha.style.borderColor = "red"
            mensagemSenha.style.display = "block"
            naoValidado()
        }


    senha.addEventListener("focus", function(){
        if(validacaoSenha.test(senha.value)){
            senha.style.borderColor = "green"
        }
        else{
            senha.style.borderColor = "red"
            naoValidado()
        }
    })
    senha.addEventListener("blur", function(){
        if(validacaoSenha.test(senha.value)){
            senha.style.borderColor = "#f2f2f2"
        }
        else{
            senha.style.borderColor = "red"
            naoValidado()
        }
    })
} 

function validar(){
    if(validacaoEmail.test(login.value) && validacaoSenha.test(senha.value)){
        botao.removeAttribute("disabled")
        botao.style.backgroundColor = "#7898ff"
    }
}

function naoValidado(){
    if(!validacaoEmail.test(login.value) || !validacaoSenha.test(senha.value)){
        botao.setAttribute("disabled", "")
        botao.style.backgroundColor = "grey"
    }
}






