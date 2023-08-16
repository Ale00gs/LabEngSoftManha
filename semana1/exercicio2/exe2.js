function numPrimo() {
  const numInput = document.getElementById("num");
  const num = parseInt(numInput.value);

  if (!isNaN(num) && num > 0) {
    const isPrimo = isPrime(num);

    if (isPrimo) {
      alert(`${num} é um número primo.`);
    } else {
      alert(`${num} não é um número primo.`);
    }
  } else {
    alert("Por favor, insira um número inteiro positivo válido.");
  }
}

function isPrime(numero) {
  if (numero <= 1) {
    return false;
  }

  if (numero <= 3) {
    return true;
  }

  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}