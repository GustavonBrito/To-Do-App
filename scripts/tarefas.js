let novaTarefa = document.querySelector('#novaTarefa');
let btnTarefa = document.querySelector('#btnTarefa');
let addTarefas = document.querySelector('#addTarefas');
let tarefasFinalizadas = document.querySelector('#tarefasFinalizadas');

function inputLength(){
    return novaTarefa.value.length;
}


//Adicionar Tarefa quando pressionar Enter
novaTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){
        let tarefa = {
            nome: novaTarefa.value,
            id: 'gerarId()',
            
        }
        //TOOD: Adicionar a tarefa HTML
        adicionarTarefa(tarefa);
    }
});



//Adicionar Tarefa ao Clicar 
btnTarefa.addEventListener('click', (e) => {
  
        let tarefa = {
            nome: novaTarefa.value,        
        }
        //TOOD: Adicionar a tarefa HTML
        adicionarTarefa(tarefa);
  
});

//Função Para Gerar ID
function gerarId(){
    return Math.floor(Math.random()*100);
}

//Adicionando Tarefa
function adicionarTarefa(tarefa){
    let li = criarTagLI(tarefa); 
    addTarefas.appendChild(li);
    novaTarefa.value = '';
}


//Criando LI
function criarTagLI(tarefa){
    if (inputLength () >= 5  ) {
        //Criando LI
        let li = document.createElement('li');
        li.classList.add('tarefa');

        let finalizada = document.createElement('div');
        finalizada.classList.add('not-done');
        finalizada.setAttribute('onclick', 'finalizaTarefa('+tarefa.id+')')

        //Criando p
        let p = document.createElement('p');
        p.classList.add('nome');
        p.innerHTML = tarefa.nome;
    
        //Criando div
        let div = document.createElement('div');
        div.classList.add('descricao');
        
        div.appendChild(p);
        li.appendChild(finalizada);
        li.appendChild(div);
        return li;
    } else {
        alert("Por gentileza, informar uma tarefa com no mínimo 5 caractere")
    }

}



function finalizaTarefa(){
    let li = document.createElement('li');
    li.classList.add('tarefa');

    let div = document.createElement('div');
    div.classList.add('descricao');

    //Criando p
    let p = document.createElement('p');
    p.classList.add('nome');
    p.innerHTML = 'Tarefa 1';

    
    let divBotoes = document.createElement('div');
    
    let btnEditar = document.createElement('button');
    btnEditar.innerHTML = '<i class="fa fa-redo"></i>';

    let btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';

    divBotoes.appendChild(btnEditar);
    divBotoes.appendChild(btnExcluir);

    tarefasFinalizadas.appendChild(li);
    li.appendChild(div);
    div.appendChild(p); 
    div.appendChild(divBotoes);

    
}

