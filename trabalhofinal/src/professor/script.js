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

var faltas = new LancarFaltas;