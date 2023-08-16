document.addEventListener("DOMContentLoaded", function () {
  const calcularFatorialButton = document.getElementById("calcularFatorial");
  calcularFatorialButton.addEventListener("click", calcularFatorial);
});

function calcularFatorial() {
  const numeroInput = document.getElementById("numeroInput").value;
  const numero = parseInt(numeroInput);

  if (!isNaN(numero) && numero >= 0) {
    const fatorial = calcularFatorialNumero(numero);
    alert(`O fatorial de ${numero} é: ${fatorial}`);
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
  }
}

function calcularFatorialNumero(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}