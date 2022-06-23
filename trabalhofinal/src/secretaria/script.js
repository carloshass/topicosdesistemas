

var requestURL = 'https://carloshass.github.io/topicosdesistemas/database_trabalhofinal/DbRegistro.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
function clicar() {
    var consultaAlunos = request.response;
    Database(consultaAlunos);
}

function Database(jsonObj) {
    var dados = jsonObj['alunos'];
    let tbody = document.getElementById('tbodydadossecretaria');
    tbody.innerText = "";
    turma = document.getElementById('turma').value;

    if (turma === "Turma 1") {
        for (var i = 0; i < dados.length; i++) {
            if (dados[i].turma === 1) {
                let tr = tbody.insertRow();

                let td_turma = tr.insertCell();
                let td_nome = tr.insertCell();
                let td_Idade = tr.insertCell();
                let td_Responsavel = tr.insertCell();
                let td_disciplinas = tr.insertCell();

                td_turma.innerText = dados[i].turma;
                td_nome.innerText = dados[i].nome;
                td_Idade.innerText = dados[i].idade;
                td_Responsavel.innerText = dados[i].responsável;
                td_disciplinas.innerText = dados[i].disciplinas;

                console.log("teste")
            }
        }
    } else {
        for (var i = 0; i < dados.length; i++) {
            if (dados[i].turma === 2) {
                let tr = tbody.insertRow();

                let td_turma = tr.insertCell();
                let td_nome = tr.insertCell();
                let td_Idade = tr.insertCell();
                let td_Responsavel = tr.insertCell();
                let td_disciplinas = tr.insertCell();

                td_turma.innerText = dados[i].turma;
                td_nome.innerText = dados[i].nome;
                td_Idade.innerText = dados[i].idade;
                td_Responsavel.innerText = dados[i].responsável;
                td_disciplinas.innerText = dados[i].disciplinas;
            }
        }
    }
}


var URLNotas = 'https://carloshass.github.io/topicosdesistemas/database_trabalhofinal/DbNotas.json';
var requestNotas = new XMLHttpRequest();
requestNotas.open('GET', URLNotas);
requestNotas.responseType = 'json';
requestNotas.send();
function consultarNotas() {
    var consultaNotas = requestNotas.response;
    DatabaseNotas(consultaNotas);
}

function DatabaseNotas(jsonObj) {
    var dadosNotas = jsonObj['notas'];
    let tbody = document.getElementById('tbodynotassecretaria');
    tbody.innerText = "";
    var aluno = document.getElementById('aluno').value;

    for (var i = 0; i < dadosNotas.length; i++) {

        if (dadosNotas[i].id == aluno) {

            let tr = tbody.insertRow();

            let td_disciplinas = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_status = tr.insertCell();

            td_disciplinas.innerText = "Português";
            td_nota1.innerText = dadosNotas[i].PortuguesN1;
            td_nota2.innerText = dadosNotas[i].PortuguesN2;
            td_media.innerText = ((dadosNotas[i].PortuguesN1 + dadosNotas[i].PortuguesN2) / 2);
            td_status.innerText = "Aprovado!";

            let tr1 = tbody.insertRow();

            let td_disciplinas1 = tr1.insertCell();
            let td_nota11 = tr1.insertCell();
            let td_nota21 = tr1.insertCell();
            let td_media1 = tr1.insertCell();
            let td_status1 = tr1.insertCell();

            td_disciplinas1.innerText = "Matemática";
            td_nota11.innerText = dadosNotas[i].MatematicaN1;
            td_nota21.innerText = dadosNotas[i].MatematicaN2;
            td_media1.innerText = ((dadosNotas[i].MatematicaN1 + dadosNotas[i].MatematicaN2) / 2);
            td_status1.innerText = "Aprovado!";

            tr2 = tbody.insertRow();

            let td_disciplinas2 = tr2.insertCell();
            let td_nota12 = tr2.insertCell();
            let td_nota22 = tr2.insertCell();
            let td_media2 = tr2.insertCell();
            let td_status2 = tr2.insertCell();

            td_disciplinas2.innerText = "Ciências";
            td_nota12.innerText = dadosNotas[i].CienciasN1;
            td_nota22.innerText = dadosNotas[i].CienciasN2;
            td_media2.innerText = ((dadosNotas[i].CienciasN1 + dadosNotas[i].CienciasN2) / 2);
            td_status2.innerText = "Aprovado!";
        }

    }
}


var URLFaltas = 'https://carloshass.github.io/topicosdesistemas/database_trabalhofinal/DbFaltas.json';
var requestFaltas = new XMLHttpRequest();
requestFaltas.open('GET', URLFaltas);
requestFaltas.responseType = 'json';
requestFaltas.send();
function consultarFaltas() {
    var consultaFaltas = requestFaltas.response;
    DatabaseFaltas(consultaFaltas);
}

function DatabaseFaltas(jsonObj) {
    var dadosFaltas = jsonObj['Faltas'];
    let tbody = document.getElementById('tbodyfaltassecretaria');
    tbody.innerText = "";
    var aluno1 = document.getElementById('aluno1').value;

    for (var i = 0; i < dadosFaltas.length; i++) {
        if (dadosFaltas[i].id == aluno1) {
            console.log(aluno1);
            let tr = tbody.insertRow();

            let td_disciplinas = tr.insertCell();
            let td_faltas = tr.insertCell();
            let td_acao = tr.insertCell();

            td_disciplinas.innerText = "Português";
            td_faltas.innerText = dadosFaltas[i].Portugues;

            if (dadosFaltas[i].Portugues >= "5") {
                td_acao.innerText = "Sim.";
            } else {
                td_acao.innerText = "Não.";
            }

            let tr1 = tbody.insertRow();

            let td_disciplinas1 = tr1.insertCell();
            let td_faltas1 = tr1.insertCell();
            let td_acao1 = tr1.insertCell();

            td_disciplinas1.innerText = "Matemática";
            td_faltas1.innerText = dadosFaltas[i].Matematica;

            if (dadosFaltas[i].Matematica >= "5") {
                td_acao1.innerText = "Sim.";
            } else {
                td_acao1.innerText = "Não.";
            }

            let tr2 = tbody.insertRow();

            let td_disciplinas2 = tr2.insertCell();
            let td_faltas2 = tr2.insertCell();
            let td_acao2 = tr2.insertCell();

            td_disciplinas2.innerText = "Ciências";
            td_faltas2.innerText = dadosFaltas[i].Ciencias;

            if (dadosFaltas[i].Ciencias >= "5") {
                td_acao2.innerText = "Sim.";
            } else {
                td_acao2.innerText = "Não.";
            }


            if (dadosFaltas[i].ClubedaMusica) {
                let tr3 = tbody.insertRow();

                let td_disciplinas3 = tr3.insertCell();
                let td_faltas3 = tr3.insertCell();
                let td_acao3 = tr3.insertCell();

                td_disciplinas3.innerText = "Clube da Música";
                td_faltas3.innerText = dadosFaltas[i].ClubedaMusica;

                if (dadosFaltas[i].ClubedaMusica >= "5") {
                    td_acao3.innerText = "Sim.";
                } else {
                    td_acao3.innerText = "Não.";
                }
            }
            if (dadosFaltas[i].Natacao) {
                let tr4 = tbody.insertRow();

                let td_disciplinas4 = tr4.insertCell();
                let td_faltas4 = tr4.insertCell();
                let td_acao4 = tr4.insertCell();

                td_disciplinas4.innerText = "Natação";
                td_faltas4.innerText = dadosFaltas[i].Natacao;

                if (dadosFaltas[i].Natacao >= "5") {
                    td_acao4.innerText = "Sim.";
                } else {
                    td_acao4.innerText = "Não.";
                }
            }
            if (dadosFaltas[i].Judo) {
                let tr5 = tbody.insertRow();

                let td_disciplinas5 = tr5.insertCell();
                let td_faltas5 = tr5.insertCell();
                let td_acao5 = tr5.insertCell();

                td_disciplinas5.innerText = "Judô";
                td_faltas5.innerText = dadosFaltas[i].Judo;

                if (dadosFaltas[i].Judo >= "5") {
                    td_acao5.innerText = "Sim.";
                } else {
                    td_acao5.innerText = "Não.";
                }
            }
        }

    }
}