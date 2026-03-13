var area = document.getElementById('area');
var form = document.getElementById('form');
var nome = document.getElementById('nome');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    entrar();
})

function entrar() {
    var nomeValue = nome.value;
    if (nomeValue === '' || nomeValue === null || nome.value.trim() === '') {

    alert("Ops, algo deu errado!");
    errorInput(nome, "Digite um nome válido");
    area.innerHTML = "Clique no botão para fazer Login";

} else {
    area.innerHTML = "Bem-vindo, " + nome.value + "! ";
    const formItem = nome.parentElement;
    formItem.classList = "form-content"

// Cria um botão "Sair da conta"
    let botaoSair = document.createElement("button");
    botaoSair.classList.add('button')
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair;

    area.appendChild(botaoSair); // Adiciona o botão ao DOM

    }
}   

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
    document.getElementById('nome').value = '';
    
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.className = "form-content error"
}