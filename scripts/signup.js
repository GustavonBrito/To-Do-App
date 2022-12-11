// Ainda está faltando:
//Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
//Os campos “senha” e “repetir senha” devem possuir a mesma informação para serem considerados válidos;

//Variaveis que ligam com o html e armazenam os dados

onload = function(){
    botao.style.backgroundColor = "grey"
}
let preencherCampos = document.querySelector("#preencherCampos")

let botao = document.getElementById("salvar");
botao.addEventListener("click", function(evento){

    let inputNome = document.getElementById("name").value;
    let inputSobrenome = document.getElementById("sobrenome").value;
    let inputEmail_1 = document.getElementById("email").value;
    let inputPassword_1 = document.getElementById("password").value;
    //let inputPassword_2 = document.getElementById("password_1").value;


    if (inputNome) {

    //evento.preventDefault(); "código para evitar de limpar a página depois do click"
    
    console.log(evento);
    console.log("Informações do Usuário");
    console.log(inputNome);
    console.log(inputSobrenome);
    console.log(inputEmail_1);
    console.log(inputPassword_1);
    //console.log(inputPassword_2);

    let usuario = { // "Informações em objeto"
        nome: inputNome,
        sobrenome: inputSobrenome,
        email:inputEmail_1,
        password: inputPassword_1,
        //passwordRed: inputPassword_2,
    }

    console.log(usuario);
}
});

// Validando nome

let inputName = document.getElementById("name");

inputName.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputName.style.backgroundColor = "ligth gray"
});

inputName.addEventListener("keyup", function(){

    let informacao = document.getElementById("infoName");


    console.log("Saiu do Campo");
    inputName.style.backgroundColor = "light blue"

    if (inputName.value.length >=4) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputName.style.border = "solid 1.5px green";
        informacao.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputName.style.border = "solid 1.5px red";
        informacao.innerText = "Informe no mínimo 4 caracteres";
        informacao.style.color = "red";
        informacao.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);

    };

});

// Validando Sobrenome

let inputSobreNome = document.getElementById("sobrenome");

inputSobreNome.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputSobreNome.style.backgroundColor = "ligth gray"
});

inputSobreNome.addEventListener("keyup", function(){

    let informacao_1 = document.getElementById("infoSobrenome");


    console.log("Saiu do Campo");
    inputSobreNome.style.backgroundColor = "light blue"

    if (inputSobreNome.value.length >=4) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputSobreNome.style.border = "solid 1.5px green";
        informacao_1.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputSobreNome.style.border = "solid 1.5px red";
        informacao_1.innerText = "Informe no mínimo 4 caracteres";
        informacao_1.style.color = "red";
        informacao_1.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);
    };

});

// Validando Email

let inputEmail = document.getElementById("email");

inputEmail.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputEmail.style.backgroundColor = "ligth gray"
});

let validacaoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

inputEmail.addEventListener("keyup", function(){

    let informacao_2 = document.getElementById("infoEmail");

    


    console.log("Saiu do Campo");
    inputEmail.style.backgroundColor = "light blue"

    if (validacaoEmail.test(inputEmail.value)) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputEmail.style.border = "solid 1.5px green";
        informacao_2.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputEmail.style.border = "solid 1.5px red";
        informacao_2.innerText = "Informe um email válido";
        informacao_2.style.color = "red";
        informacao_2.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);
    };

});

//Validando Password

let validacaoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

let validacaoSenhaRep = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

let inputPassword = document.getElementById("password");

inputPassword.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputPassword.style.backgroundColor = "ligth gray"
});

inputPassword.addEventListener("keyup", function(){

    let informacao_3 = document.getElementById("infoPassword");


    console.log("Saiu do Campo");
    inputPassword.style.backgroundColor = "light blue"

    if (validacaoSenha.test(inputPassword.value)) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputPassword.style.border = "solid 1.5px green";
        informacao_3.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputPassword.style.border = "solid 1.5px red";
        informacao_3.innerText = "A senha requer uma letra maiúscula, um símbolo e 8 caracteres";
        informacao_3.style.color = "red";
        informacao_3.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);

    };

});

// Validando Repetição do Password

let inputPasswordRep = document.getElementById("repeatPassword");

inputPasswordRep.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputPasswordRep.style.backgroundColor = "ligth gray"
});

inputPasswordRep.addEventListener("keyup", function(){

    let informacao_4 = document.getElementById("inforepeatPassword");


    console.log("Saiu do Campo");
    inputPasswordRep.style.backgroundColor = "light blue"

    if (inputPasswordRep.value == inputPassword.value || inputPassword.value == inputPasswordRep.value) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputPasswordRep.style.border = "solid 1.5px green";
        informacao_4.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputPasswordRep.style.border = "solid 1.5px red";
        informacao_4.innerText = "A senha deve ser igual a primeira senha informada";
        informacao_4.style.color = "red";
        informacao_4.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);

    };

});

function validarCampos(){
    if (inputName.value.length < 4 || inputSobreNome.value.length < 4){
        botao.setAttribute("disabled", "")
        preencherCampos.style.display = "block"
        botao.style.backgroundColor = "grey"
    }
    else{
        botao.setAttribute("enabled",true)
        preencherCampos.style.display = "none"
        
    }
}

function validarEmail(){
    if(validacaoEmail.test(inputEmail.value))
    {
        botao.setAttribute("enabled",true)
        preencherCampos.style.display = "none"
        
    }
    else
    {
        botao.setAttribute("disabled", "")
        preencherCampos.style.display = "block"
        botao.style.backgroundColor = "grey"
    }
}

function validarSenha(){
    if(validacaoSenha.test(inputPassword.value) || validacaoSenhaRep.test(inputPasswordRep.value))
    {
        botao.setAttribute("enabled",true)
        preencherCampos.style.display = "none"
        
    }
    else
    {
        botao.setAttribute("disabled", "")
        preencherCampos.style.display = "block"
        botao.style.backgroundColor = "grey"
    }

}
function validarSenhaRep(){
    if(validacaoSenhaRep.test(inputPasswordRep.value) && validarEmail())
    {
        botao.setAttribute("enabled",true)
        preencherCampos.style.display = "none"
        botao.style.backgroundColor = "blue"
    }
    else
    {
        botao.setAttribute("disabled", "")
        preencherCampos.style.display = "block"
        botao.style.backgroundColor = "grey"
    }

}

botao.addEventListener("click", function(e){
    e.preventDefault()
    validarCampos()
    validarEmail()
    validarSenha()
})

/* let input = document.querySelector("input")

input.addEventListener("keydown",function(){
    if (inputEmail.value == "" || inputName.value.length == "" || inputSobreNome.value == "" || inputPassword.value == "" || inputPasswordRep.value == ""){
        botao.style.backgroundColor = "red"
        }
    else{
            botao.style.backgroundColor = "blue"
        }
}) */

botao.addEventListener("click",function(e){
    e.preventDefault()  
    infosUsuario()  
})

function infosUsuario(){
    let informaçõesUsuario = {
        firstName : inputName.value,
        lastName: inputSobreNome.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    let bodyJSON = JSON.stringify(informaçõesUsuario)
    console.log(bodyJSON);
    valorCampos(bodyJSON)
}

function valorCampos(JSON){
    cadastroUsuario(JSON)
}

async function cadastroUsuario(infosUsuario){
    let config = {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: infosUsuario
    }    
    console.log(config);
try{
    let resposta = await fetch(`${baseURL()}/users`, config)
        if(resposta.status == 201){
            let response = await resposta.json()

                loginSucesso(response)
            
        }
        else{
            throw resposta
        }
}
catch (erro){
        loginErro(erro)
        console.log("deu erro");

}
}

function loginSucesso(resposta) {
    console.log(resposta.jwt);

    //Salva o token no cliente/front end

    sessionStorage.setItem("jwt", resposta.jwt)

    //Direciona o usuário pra pagina de tarefas
    /* location.href = "index.html" */
}

function loginErro(resposta){
    if(resposta.status == 400 || resposta.status == 404){
        console.log(resposta);
        console.log("deu erro");
    }
}


