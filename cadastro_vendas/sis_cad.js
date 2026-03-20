let vendas = [];
let proxID = 1;

function atualizarTabela() {
    const corpoTabela = document.getElementById('corpoTabela');
    const controlesGlobais = document.getElementById('controles-globais');
    
    corpoTabela.innerHTML = '';

    if(vendas.length === 0){
        controlesGlobais.style.display = 'none';
        corpoTabela.innerHTML = '<tr><td colspan="7">Nenhuma venda cadastrada</td></tr>';
        return;
    } else {
        controlesGlobais.style.display = 'flex';
    }

    for (let i = 0; i < vendas.length; i++){
        const venda = vendas [i];
        const linha = document.createElement('tr');

        linha.innerHTML = `
                <td>${venda.id}</td>
                <td>${venda.vendedor}</td>
                <td>R$ ${venda.valor.toFixed(2)}</td>
                <td>R$ ${venda.desconto.toFixed(2)}</td>
                <td><strong>R$ ${venda.valorFinal.toFixed(2)}</strong></td>
                <td>${venda.data}</td>
                <td>
                    <button class="btn-remover-row" onclick="removerVenda(${i})">Remover</button>
                </td>
            `;
            
            corpoTabela.appendChild(linha);
    }

}

function cadastrar() {
    const inputNome = document.getElementById('nome');
    const inputValor = document.getElementById('valor');
    const grupoNome = document.getElementById('group-name');
    const grupoValor = document.getElementById('group-valor');

    let erro = false;

    if(inputNome.value.trim() === '' || inputNome.value.length < 2){
        grupoNome.classList.add('error');
        erro = true;
    } else {
        grupoNome.classList.remove('error');
    }

    const valorNum = parseFloat(inputValor.value);
    if(isNaN(valorNum) || valorNum <= 0){
        grupoValor.classList.add('error');
        erro = true;
    } else {
        grupoValor.classList.remove('error');
    }

    if(erro){
        alert("Ops! Verifique os campos em vermelho.");
        return;
    }

    const valorDesconto = valorNum * 0.10;
    const valorFinal =  valorNum - valorDesconto;
    const dataHora = new Date().toLocaleDateString('pt-BR') + " " + new Date().toLocaleTimeString('pt-BR');

    const novaVenda = {
        id: proxID++,
        vendedor: inputNome.value,
        valor: valorNum,
        desconto: valorDesconto,
        valorFinal: valorFinal,
        data: dataHora
    };

    vendas.push(novaVenda);

    inputNome.value = '';
    inputValor.value = '';

    atualizarTabela();
}

function removerVenda(indice) {
    const idRemovido = vendas[indice].id;
    vendas.splice(indice, 1);
    atualizarTabela();
    alert(`Sucesso: A venda ${idRemovido} foi removida da lista!`);
}

function removerUltimo() {
    if (vendas.length === 0) return;
    vendas.pop();
    atualizarTabela();
}

function limparTudo() {
    if (vendas.length === 0) {
        alert('A lista já está vazia!');
        return;
    }
    
    if (confirm('Deseja apagar TODOS os dados da Tabela?')) {
        vendas = []; 
        proxID = 1;  
        atualizarTabela();
    }
}

atualizarTabela();

