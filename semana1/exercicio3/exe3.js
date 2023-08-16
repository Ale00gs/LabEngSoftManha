document.addEventListener("DOMContentLoaded", function () {
  const verificaParButton = document.getElementById("verificaPar");
  verificaParButton.addEventListener("click", verificarParOuImpar);
});

function verificarParOuImpar() {
  const numeroInput = document.getElementById("numeroInput").value;
  const numero = parseInt(numeroInput);

  if (!isNaN(numero) && numero >= 0) {
    if (numero % 2 === 0) {
      alert(`${numero} é um número PAR.`);
    } else {
      alert(`${numero} é um número ÍMPAR.`);
    }
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
  }
}