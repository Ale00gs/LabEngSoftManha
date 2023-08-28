function VerificarHora() {
    const diasDaSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const dataAtual = new Date();
    const diaDaSemana = diasDaSemana[dataAtual.getDay()];
    const diaDoMes = dataAtual.getDate();
    const mes = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}`;

    // Encontrar o elemento no HTML onde queremos exibir a data
    const dataContainer = document.getElementById('data-container');

    // Inserir a data formatada no elemento
    dataContainer.textContent = dataFormatada;
}

VerificarHora();