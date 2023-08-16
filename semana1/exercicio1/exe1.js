document.addEventListener("DOMContentLoaded", function () {
  const verificarBotao = document.getElementById("verificarBotao");
  verificarBotao.addEventListener("click", verificarTipoDado);
});

function verificarTipoDado() {
  const dadoInput = document.getElementById("dadoInput").value;
  const confirmacao = confirm("Você deseja verificar o tipo do dado informado?");
  const resultadoTipoElement = document.getElementById("resultadoTipo");

  if (confirmacao) {
    const tipoDado = determinarTipo(dadoInput);
    resultadoTipoElement.innerHTML = `O tipo do dado informado é: <strong>${tipoDado}</strong>`;
  } else {
    resultadoTipoElement.innerHTML = "Obrigado por visitar esta página.";
  }
}

function determinarTipo(dado) {
  if (dado === "true" || dado === "false") {
    return "Boolean";
  } else if (!isNaN(parseFloat(dado)) && isFinite(dado)) {
    return "Number";
  } else {
    return "String";
  }
}