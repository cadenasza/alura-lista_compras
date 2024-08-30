import { excluirItem } from "./excluirItem.js";
const listaComprados = document.getElementById('lista-comprados');
const listaDeCompras = document.getElementById('lista-de-compras');
let contador = 0;

export function criarItemDaLista(item){
    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('item-lista-container');

    const containerNomeItem = document.createElement('div');

    //checkbox
    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('checkbox-container');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-input');
    checkboxInput.id = "checkbox-"+ contador++;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id);
    checkboxLabel.addEventListener('click', function(evento){
        const checkboxInput = evento.currentTarget.querySelector('.checkbox-input');
        const checkboxCostumizado = evento.currentTarget.querySelector('.checkbox-costumizado');
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked){
            checkboxCostumizado.classList.add('checked');
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCostumizado.classList.remove('checked');
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    })
    
    const checkboxCostumizado = document.createElement('div');
    checkboxCostumizado.classList.add('checkbox-costumizado');

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCostumizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeItem.appendChild(containerCheckbox);
    //fim checkbox

    const nomeItem = document.createElement('p');
    nomeItem.id = "item-titulo";
    nomeItem.innerText = item;
    containerNomeItem.appendChild(nomeItem);

    const containerBotoes = document.createElement('div');
    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('botao-acao');

    const imagemRemover = document.createElement('img');
    imagemRemover.src = "img/Excluir.svg";
    imagemRemover.alt = "remover";

    botaoRemover.addEventListener('click', function(){
        excluirItem(itemDaLista);
    })

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEdicao = document.createElement('button');
    botaoEdicao.classList.add('botao-acao');
    const imagemEdicao = document.createElement('img');
    imagemEdicao.src = "img/Edição.svg";
    imagemEdicao.alt = "editar";

    botaoEdicao.appendChild(imagemEdicao);
    containerBotoes.appendChild(botaoEdicao);

    containerItemLista.appendChild(containerNomeItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement('p');
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) as ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("item-lista-texto");

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

     return itemDaLista;
}