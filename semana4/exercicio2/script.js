function calcularCarro() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const quilometragem = parseFloat(document.getElementById("quilometragem").value);
    const valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

    if (!marca || !modelo || isNaN(ano) || !cor || isNaN(quilometragem) || isNaN(valor_fipe)) {
        alert("Por favor, preencha todos os campos antes de calcular.");
        redefinirFormulario(event);
        return;
    }

    const carro = {
        marca,
        modelo,
        ano,
        cor,
        quilometragem,
        valor_fipe,
        anosUtilizacao: function () {
            const anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },
        valorMercado: function () {
            if (this.quilometragem <= 30000) {
                return this.valor_fipe * 1.1;
            } else if (this.quilometragem <= 50000) {
                return this.valor_fipe;
            } else {
                return this.valor_fipe * 0.9;
            }
        }
    };

    function redefinirFormulario(event){
        window.location.reload();
    }

    // Resultado
    const anosDeUso = carro.anosUtilizacao();
    const valorDeMercado = carro.valorMercado();

    // Exibir o resultado na página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>O veículo tem ${anosDeUso} anos de utilização e seu valor de mercado é R$ ${valorDeMercado.toFixed(2)}</p>`;

    // reset
    const resetButton = document.querySelector("button[type=reset]");
    resetButton.addEventListener("click", redefinirFormulario);

}