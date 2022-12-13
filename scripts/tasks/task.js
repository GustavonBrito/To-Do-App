let tokenJwt;
let tarefasTerminadaUl = document.querySelector(".tarefas-terminadas")
let tarefasPendentesUl = document.querySelector(".tarefas-pendentes")
let novaTarefa = document.getElementById("novaTarefa")
let btnTarefa = document.querySelector('#btnTarefa');
let finalizarSessao = document.querySelector("#a")

//Evento automático
function baseURL(){
    return "http://todo-api.ctd.academy:3000/v1"
}

onload = function (){
    tokenJwt = this.sessionStorage.getItem("jwt");

    if (!tokenJwt) {
        this.location.href = "index.html";
    }else {
        buscaDadosUsuariosApi();
        

        renderizarSkeletons(3,".tarefas-pendentes")
        renderizarSkeletons(3,".tarefas-terminadas")

        //Chama o método que lista todas as tarefas
        
        buscaTarefas()
    }
}

async function buscaDadosUsuariosApi (){
     let configRequest = {
        headers: {
            'Authorization': tokenJwt
        }
     }
    
     let resposta = await fetch(`${baseURL()}/users/getMe`, configRequest);
     let respostaJs = await resposta.json();
     renderizaDadosUsuario(respostaJs)
}

function renderizaDadosUsuario(dadosUsuario){
    let nomeUsuario = document.getElementById("nomeUsuario");
    nomeUsuario.innerText = `${dadosUsuario.firstName} ${dadosUsuario.lastName}`

}

/* BUSCA AS TAREFAS DO USUÁRIO LOGADO */
async function buscaTarefas() {

    let configRequest = {
        //Passo apenas o cabeçalho, pois já sabe que é GET
        headers:
            { "authorization": tokenJwt }
    }

    try {
        let respostaApi = await fetch(`${baseURL()}/tasks`, configRequest);

        if (respostaApi.status == 200) {
            let respostaFinal = await respostaApi.json();
            setTimeout(() => {removerSkeleton(".tarefas-pendentes")
            manipulaListaTarefas(respostaFinal);}, 3000)
            setTimeout(() => {removerSkeleton(".tarefas-terminadas")},3000)
        } else {
            throw Error("Ocorreu algum erro ao buscar as tarefas do usuário!");
        }
    } catch (error) {
        removerSkeleton(".tarefas-pendentes")
        alert(error);
    }


}

//LISTA TODAS AS TAREFAS
let manipulaListaTarefas = (listaTarefas) => {

    listaTarefas.forEach(tarefa => {
        if(tarefa.completed){ //True
            //Tarefas-terminadas
            renderizaTarefaConcluida(tarefa)

        } else { //False
             //Tarefas-pendentes
             renderizaTarefaPendente(tarefa);
        }
    });
}


function renderizaTarefaPendente(tarefa) {

    let li = document.createElement("li");
    li.classList.add("tarefa");
    li.innerHTML = 
    `
        <div class="not-done" id="${tarefa.id}" onclick="finalizadaTarefa(${tarefa.id})"></div>
        <div class="descricao">
            <p class="nome">ID: ${tarefa.id}</p>
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
        </div>
    `;
    tarefasPendentesUl.appendChild(li);

}


function renderizaTarefaConcluida(tarefa) {

    let li = document.createElement("li");
    li.classList.add("tarefa");
    li.innerHTML = 
    `
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>   
            <div>
                <i class="fa fa-trash" onclick="excluiTarefa(${tarefa.id})" title="Excluir Tarefa"></i>
                <i class="fa fa-redo"  onclick="retornaTarefa(${tarefa.id})" title="Retornar Tarefa"></i>
            </div>        
        </div>
    `;
    tarefasTerminadaUl.appendChild(li);


}


function finalizadaTarefa(id){
   const body = {
        completed: true
    }
    let request = {
        method: 'PUT',
        headers: {
            'Authorization': tokenJwt,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        redirect: 'follow'
    }
    fetch(`${baseURL()}/tasks/${id}`, request)
    .then(
        function (resultado) {
            if (resultado.status == 200 || resultado.status == 201) {
                return resultado.json()
            }
            else {
                throw resultado
            }
        }
    )
    .then(
        function (resultado) {
            renderizaTarefaConcluida(resultado)  
            window.location.reload()  
             
        }
    )
    .catch(
        function (erro) {
            console.error(erro);

        })
}


 function excluiTarefa (id){
    let request = {
        method: 'DELETE',
        headers: {
            'Authorization': tokenJwt,
            'Content-Type': 'application/json'
        },
    }
    fetch(`${baseURL()}/tasks/${id}`, request)
        .then(
            function (resultado) {
                if (resultado.status == 200 || resultado.status == 201) {
                    window.location.reload()
                }
                else {
                    throw resultado
                }
            }
        )
      
        .catch(
            function (erro) {
            console.error(erro);    

            })
 }

 function retornaTarefa(id){
    const body = {
        completed: false
    }
    let request = {
        method: 'PUT',
        headers: {
            'Authorization': tokenJwt,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        redirect: 'follow'
    }
    fetch(`${baseURL()}/tasks/${id}`, request)
    .then(
        function (resultado) {
            if (resultado.status == 200 || resultado.status == 201) {
                return resultado.json()
            }
            else {
                throw resultado
            }
        }
    )
    .then(
        function (resultado) {
            renderizaTarefaPendente(resultado)  
            window.location.reload()  
             
        }
    )
    .catch(
        function (erro) {
            console.error(erro);

        })
 }

//Verifica tamanho da Tarefa Digitada
function inputLength(){
    return novaTarefa.value.length;
}

/*
//Adicionar Tarefa quando pressionar Enter
novaTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13 && inputLength()>5) {
        alert('Funcinou');
    } else {
        alert('Por gentileza, digita uma tarefa com mais de 5 caracteres')
    }
});
*/

//Adicionar Tarefa ao Clicar 
btnTarefa.addEventListener('click', (e) => {
  if(inputLength()>5){
    EnviaTarefaAPI(novaTarefa.value)
    //Limpa o campo de digitar
    novaTarefa.value = '';
  }else {
    alert('Por Gentileza, Informar uma tarefa com mais de 5 caracteres')
    
  }
  
});


function EnviaTarefaAPI(description) {
    if (description.trim() == '') {
        return
    }
    const body = {
        description: `${description}`,
        completed: false
    }
 

    let request = {
        method: 'POST',
        headers: {
            'Authorization': tokenJwt,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        redirect: 'follow'
    }
    fetch(`${baseURL()}/tasks`, request)
        .then(
            function (resultado) {
                if (resultado.status == 200 || resultado.status == 201) {
                    return resultado.json()
                }
                else {
                    throw resultado
                }
            }
        )
        .then(
            function (resultado) {
               renderizaTarefaPendente(resultado)
            }
        )
        
        .catch(
            function (erro) {
                console.error(erro);

            })
}



function finalizarsessao(){
    finalizarSessao.addEventListener("click", function(){
        let teste = confirm("Tem certeza que deseja sair ?")
        if (teste === true){
            location.href = "index.html"
        }
        else{
            location.href = "tarefas.html"
        }
    })
}

finalizarsessao()


