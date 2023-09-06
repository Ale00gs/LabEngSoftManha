class Pessoa {
    constructor(nome, email, dataNascimento) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, curso) {
        super(nome, email, dataNascimento);
        this.curso = curso;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, areaAtuacao, linkLattes) {
        super(nome, email, dataNascimento);
        this.areaAtuacao = areaAtuacao;
        this.linkLattes = linkLattes;
    }
}

function selecionarTipo() {
    const select = document.getElementById("tipo");
    const alunoArea = document.getElementById("alunoArea");
    const professorArea = document.getElementById("professorArea");

    if (select.value === "aluno") {
        alunoArea.style.display = "block";
        professorArea.style.display = "none";
    } else if (select.value === "professor") {
        alunoArea.style.display = "none";
        professorArea.style.display = "block";
    }
}

function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dataNascimento = document.getElementById("data_nascimento").value;
    const matricula = document.getElementById("matricula").value;
    const telefoneFixo = document.getElementById("telefone_fixo").value;
    const telefoneCelular = document.getElementById("telefone_celular").value;
    const select = document.getElementById("tipo");
    const tipo = select.options[select.selectedIndex].text;
    let infoAdicional = "";

    if (tipo === "Aluno") {
        const curso = document.getElementById("curso").value;
        infoAdicional = `Curso: ${curso}`;
    } else if (tipo === "Professor") {
        const areaAtuacao = document.getElementById("area_atuacao").value;
        const linkLattes = document.getElementById("link_lattes").value;
        infoAdicional = `Área de Atuação: ${areaAtuacao}\nLink Lattes: ${linkLattes}`;
    }

    const mensagem = `Informações do ${tipo}:\nNome: ${nome}\nEmail: ${email}\nData de Nascimento: ${dataNascimento}\nMatrícula: ${matricula}\nTelefone Fixo: ${telefoneFixo}\nTelefone Celular: ${telefoneCelular}\n${infoAdicional}`;

    alert(mensagem);
}

function redefinirFormulario(event){
    window.location.reload();
}

const selectElement = document.getElementById("tipo");
selectElement.addEventListener("change", selecionarTipo);

const submitButton = document.querySelector("button[type=submit]");
submitButton.addEventListener("click", enviarFormulario);

const resetButton = document.querySelector("button[type=reset]");
resetButton.addEventListener("click", redefinirFormulario);

document.addEventListener("DOMContentLoaded", () => {
    selecionarTipo();
});
