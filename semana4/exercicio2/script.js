function calcularCarro() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const kilometragem = parseFloat(document.getElementById("kilometragem").value);
    const valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

    if (!marca || !modelo || isNaN(ano) || !cor || isNaN(kilometragem) || isNaN(valor_fipe)) {
        alert("Por favor, preencha todos os campos antes de calcular.");
        window.location.reload();
        return;
    }

    const carro = {
        marca,
        modelo,
        ano,
        cor,
        kilometragem,
        valor_fipe,
        anosUtilizacao: function () {
            const anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },
        valorMercado: function () {
            if (this.kilometragem <= 30000) {
                return this.valor_fipe * 1.1;
            } else if (this.kilometragem <= 50000) {
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