class LancarFaltas {

    constructor() {
        this.id = 1;
        this.arrayFaltas = [];
    }

    enviarFaltas() {
        let disciplinas = this.lerDados();

        if (this.validaCampos(disciplinas)) {
            this.adicionar(disciplinas);
        }

        this.listaTabela();

        console.log(this.arrayFaltas);

    }

    listaTabela() {
        let tbody = document.getElementById('tbodyfaltas');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayFaltas.length; i++) {
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_disciplina = tr.insertCell();
            let td_faltas = tr.insertCell();
            let td_confirmacao = tr.insertCell();

            td_nome.innerText = this.arrayFaltas[i].aluno;
            td_disciplina.innerText = this.arrayFaltas[i].descricao;
            td_faltas.innerText = this.arrayFaltas[i].faltas;
            td_confirmacao.innerText = "Confirmado"

            // td_id.classList.add('col-2');
            // td_status.classList.add('col-3');
            // td_acoes.classList.add('col-2');
            // td_disciplina.classList.add('col-3');

        }
    }

    adicionar(disciplinas) {
        this.arrayFaltas.push(disciplinas);
        this.id++;
    }

    lerDados() {
        let disciplina = {};

        disciplina.descricao = document.getElementById('disciplina').value;
        disciplina.aluno = document.getElementById('aluno').value;
        disciplina.faltas = document.getElementById('faltas').value;

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

class LancarNotas {

    constructor() {
        this.id = 1;
        this.arrayNotas = [];
    }

    enviarNotas() {
        let disciplinas = this.lerDados();

        this.adicionar(disciplinas);

        this.listaTabela();

    }

    listaTabela() {
        let tbody = document.getElementById('tbodynotas');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayNotas.length; i++) {
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_disciplina = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_resultado = tr.insertCell();

            td_nome.innerText = this.arrayNotas[i].aluno;   
            td_disciplina.innerText = this.arrayNotas[i].descricao;
            td_nota1.innerText = this.arrayNotas[i].notaP;
            td_nota2.innerText = this.arrayNotas[i].notaS;
         
            let media = ((parseInt(this.arrayNotas[i].notaS) + parseInt(this.arrayNotas[i].notaP))/2);

            td_media.innerText = media;
            
            if (media >= 6) {
                td_resultado.innerText = "Aprovado";
                td_resultado.classList.add('text-success')
            } else {
                td_resultado.innerText = "Reprovado";
                td_resultado.classList.add('text-danger')
            }
            

        }
    }

    adicionar(disciplinas) {
        this.arrayNotas.push(disciplinas);
        this.id++;
    }

    lerDados() {
        let disciplina = {};

        disciplina.descricao = document.getElementById('disciplina1').value;
        disciplina.aluno = document.getElementById('aluno1').value;
        disciplina.notaP = document.getElementById('nota1').value;
        disciplina.notaS = document.getElementById('nota2').value;

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

var faltas = new LancarFaltas;
var notas = new LancarNotas;