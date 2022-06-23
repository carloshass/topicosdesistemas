


class validacaoDados {

    constructor() {
        this.usernumber;
        this.password;
    }

    login() {

        this.usernumber = document.getElementById('usernumber').value;
        this.password = document.getElementById('password').value;

        if (this.usernumber == "12345" && this.password == "12345") {
            window.open('index.html');

        } else {
            alert("Matrícula ou senha errado!")
        }
    }

    alunoInformacoes() {

        // alert('Confirme sua matrícula ' + this.matricula)
        // let name = document.getElementById("resultname").value;

        // if (this.usernumber == "12345") {
        //     name = document.getElementById("resultname").textContent = "Evelin";
        //     document.getElementById("name").innerText = "Evelin";
        //     document.getElementById("responsavel").innerText = "Maria";
        //     document.getElementById("Matrícula").innerText = "12345";
        // } else if (matricula == "11111") {
        //     nome = "Bernardo";
        //     resp = "José";
        //     matricula = "11111";
        // } else {
        //     nome = "Pedro";
        //     resp = "Ana";
        //     matricula = "22222";
        // }

        // console.log(name);
    }
}

class SolicitarDisciplina {

    constructor() {
        this.id = 1;
        this.status = "Enviado";
        this.arrayDisciplinas = [];
    }

    enviarSolicitacao() {
        let disciplinas = this.lerDados();

        if (this.validaCampos(disciplinas)) {
            this.adicionar(disciplinas);
        }

        this.listaTabela();

        console.log(this.arrayDisciplinas);

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_disciplina = tr.insertCell();
            let td_status = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayDisciplinas[i].id;
            td_disciplina.innerText = this.arrayDisciplinas[i].extra;
            td_status.innerText = this.arrayDisciplinas[i].status;

            td_id.classList.add('col-2');
            td_status.classList.add('col-3');
            td_acoes.classList.add('col-2');
            td_disciplina.classList.add('col-3');

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            imgDelete.classList.add('tableacoesimg');
            imgDelete.setAttribute("onclick", "disciplina.deletar(" + this.arrayDisciplinas[i].id + ")");

            td_acoes.appendChild(imgDelete);

        }
    }

    adicionar(disciplinas) {
        this.arrayDisciplinas.push(disciplinas);
        this.id++;
    }

    lerDados() {
        let disciplina = {};

        disciplina.id = this.id;
        disciplina.extra = document.getElementById('disciplinaextra').value;
        disciplina.status = this.status;

        return disciplina;
    }

    validaCampos(disciplinas) {

        // fazer ainda


        return true;
    }

    deletar(id) {

        if (confirm('Deseja realmente deletar essa inscrição ' + id + '?')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayDisciplinas.length; i++) {
                if (this.arrayDisciplinas[i].id == id) {
                    this.arrayDisciplinas.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }

    exibir() {
        let testejson = JSON.stringify(this.arrayDisciplinas);
        console.log(testejson);
    }

    exibirPais(testejson) {
        console.log(testejson);
    }
}

class bancoDeDados {

    constructor() {
        this.arrayDisciplinas;
    }

    exibir() {
        console.log(this.arrayDisciplinas[1]);
    }
}

function materiaportugues() {

    let materiashowP = document.getElementById("showmateriaportugues").style.display;

    if (materiashowP == "none") {
        document.getElementById("showmateriaportugues").style.display = "block";
        document.getElementById("showmateriamatematica").style.display = "none";
        document.getElementById("showmateriaciencias").style.display = "none";
    } else {
        document.getElementById("showmateriaportugues").style.display = "none";
    }

}

function materiamatematica() {

    let materiashowM = document.getElementById("showmateriamatematica").style.display;

    console.log(showmateriamatematica);

    if (materiashowM == "none") {
        document.getElementById("showmateriamatematica").style.display = "block";
        document.getElementById("showmateriaportugues").style.display = "none";
        document.getElementById("showmateriaciencias").style.display = "none";
    } else {
        document.getElementById("showmateriamatematica").style.display = "none";
    }

}

function materiaciencias() {

    let materiashowC = document.getElementById("showmateriaciencias").style.display;

    console.log(showmateriaciencias);

    if (materiashowC == "none") {
        document.getElementById("showmateriaciencias").style.display = "block";
        document.getElementById("showmateriaportugues").style.display = "none";
        document.getElementById("showmateriamatematica").style.display = "none";
    } else {
        document.getElementById("showmateriaciencias").style.display = "none";
    }

}

function clubeDaMusica() {

    let extraClube = document.getElementById("showclubedamusica").style.display;

    console.log(showclubedamusica);

    if (extraClube == "none") {
        document.getElementById("showclubedamusica").style.display = "block";
        document.getElementById("shownatacao").style.display = "none";
        document.getElementById("showjudo").style.display = "none";
    } else {
        document.getElementById("showclubedamusica").style.display = "none";
    }

}

function natacao() {

    let extraNatacao = document.getElementById("shownatacao").style.display;

    console.log(shownatacao);

    if (extraNatacao == "none") {
        document.getElementById("shownatacao").style.display = "block";
        document.getElementById("showclubedamusica").style.display = "none";
        document.getElementById("showjudo").style.display = "none";
    } else {
        document.getElementById("shownatacao").style.display = "none";
    }

}

function judo() {

    let extraJudo = document.getElementById("showjudo").style.display;

    console.log(showjudo);

    if (extraJudo == "none") {
        document.getElementById("showjudo").style.display = "block";
        document.getElementById("shownatacao").style.display = "none";
        document.getElementById("showclubedamusica").style.display = "none";
    } else {
        document.getElementById("showjudo").style.display = "none";
    }

}

var disciplina = new SolicitarDisciplina;
var validacao = new validacaoDados;
var teste = new bancoDeDados;


const materiasExtras = [
    {
        "aluno": "João Maria",
        "clubeDaMusica": {
            "id": 1,
            "extra": "Clube da Música",
            "situacao": true
        },
        "natacao": {
            "id": 2,
            "extra": "natacao",
            "situacao": false
        },
        "judo": {
            "id": 3,
            "extra": "Judô",
            "situacao": true
        }
    }
]

