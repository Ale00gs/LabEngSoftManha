function VerificarPalindromo() {
    document.getElementById('verificar').addEventListener('click', function() {
        const inputTexto = document.getElementById('texto').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

        if (inputTexto === '') {
            alert('Por favor, insira um texto para verificar se é um palíndromo.');
            return;
        }

        const textoInvertido = inputTexto.split('').reverse().join('');

        if (inputTexto === textoInvertido) {
            alert('O texto é um palíndromo!');
        } else {
            alert('O texto não é um palíndromo.');
        }
    });
}

VerificarPalindromo();