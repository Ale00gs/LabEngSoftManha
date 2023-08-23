const dados = [];

function adicionarValor() {
    const input = document.getElementById("valor");
    const novoValor = input.value;

    if (novoValor !== "") {
        dados.push(Number(novoValor)); // Convertendo para número
        dados.sort((a, b) => a - b); // Função de comparação para ordenação

        atualizarLista();

        input.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("lista-dados");
    lista.innerHTML = "";

    dados.forEach(function(item) {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = item;
        lista.appendChild(itemDiv);
    });
}
