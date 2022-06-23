class AprovarDisciplina {

    constructor() {
        this.id = 1;
        this.status = "Aguardando Aprovação";
        this.arrayDisciplinas = [];
    }

    aprovarSolicitacao() {
        this.lerDados();

        this.listaTabela();


        console.log(this.arrayDisciplinas);

    }

    aprovarTotal() {
        this.total();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_disciplina = tr.insertCell();
            let td_status = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayDisciplinas[i].id;
            td_disciplina.innerText = this.arrayDisciplinas[i].disciplina;
            td_valor.innerText = this.arrayDisciplinas[i].valor;
            td_status.innerText = this.arrayDisciplinas[i].status;

            td_id.classList.add('col-2');
            td_status.classList.add('col-3');
            td_acoes.classList.add('col-2');
            td_disciplina.classList.add('col-3');

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            imgDelete.classList.add('tableacoesimg');
            imgDelete.setAttribute("onclick", "disciplinaAprovar.deletar(" + this.arrayDisciplinas[i].id + ")");

            td_acoes.appendChild(imgDelete);

            // let imgAprovar = document.createElement('img');
            // imgAprovar.src = 'img/delete.svg';
            // imgAprovar.classList.add('tableacoesimg');
            // imgAprovar.setAttribute("onclick", "disciplinaAprovar.deletar(" + this.arrayDisciplinas[i].id + ")");

            // td_acoes.appendChild(imgAprovar);


        }
    }

    lerDados() {
        this.arrayDisciplinas = [
            {
                id: 1,
                disciplina: 'Clube da Música',
                status: 'Aguardando',
                valor: "R$ 250,00 reais",
                soma: 250
            },
            {
                id: 2,
                disciplina: 'Judô',
                status: 'Aguardando',
                valor: "R$ 350,00 reais",
                soma: 350
            },
            {
                id: 3,
                disciplina: 'Natação',
                status: 'Aguardando',
                valor: "R$ 100,00 reais",
                soma: 100
            }
        ]

    }

    deletar(id) {

        if (confirm('Deseja realmente deletar essa inscrição ' + id + '?')) {
            let tbody = document.getElementById('tbody');
            console.log(id);

            for (let i = 0; i < this.arrayDisciplinas.length; i++) {
                if (this.arrayDisciplinas[i].id == id) {
                    this.arrayDisciplinas.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }

    total() {
        let somaTotal = 0;
        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            somaTotal = this.arrayDisciplinas[i].soma + somaTotal;
        }
        console.log(somaTotal);

        alert("O valor total das disciplinas extras ficou de: R$ " + somaTotal + ",00 reais")
    }
}

class ConsultarNotas {

    constructor() {
        this.id = 1;
        this.status = "Aprovado!"
        this.arrayNotas = [];
    }

    consultar() {
        this.lerDados();

        this.listaTabela();


        console.log(this.arrayNotas);

    }

    consultaExtras(){

        this.lerDadosExtras();

        this.listaTabelaExtras();
    }

    aprovarTotal() {
        this.total();
    }

    listaTabela() {
        let tbody = document.getElementById('tbodynotas');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayNotas.length; i++) {
            let tr = tbody.insertRow();

            let td_disciplinas = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_faltas = tr.insertCell();
            let td_status = tr.insertCell();

            td_disciplinas.innerText = this.arrayNotas[i].disciplina;
            td_nota1.innerText = this.arrayNotas[i].Nota01;
            td_nota2.innerText = this.arrayNotas[i].Nota02;
            td_media.innerText = this.arrayNotas[i].Media;
            td_faltas.innerText = this.arrayNotas[i].Faltas;
            td_status.innerText = this.status;


        }
    }

    listaTabelaExtras() {
        let tbody = document.getElementById('tbodynotasExtras');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayNotas.length; i++) {
            let tr = tbody.insertRow();

            let td_disciplinas = tr.insertCell();
            let td_faltas = tr.insertCell();
            let td_status = tr.insertCell();

            td_disciplinas.innerText = this.arrayNotas[i].disciplina;
            td_faltas.innerText = this.arrayNotas[i].Faltas;
            td_status.innerText = this.status;

        }
    }

    lerDados() {
        this.arrayNotas = [
            {
                id: 1,
                disciplina: 'Português',
                Nota01: 9,
                Nota02: 8,
                Media: 8.5,
                Faltas: 2

            },
            {
                id: 2,
                disciplina: 'Matemática',
                Nota01: 10,
                Nota02: 8,
                Media: 9,
                Faltas: 1
            },
            {
                id: 3,
                disciplina: 'Ciências',
                Nota01: 8,
                Nota02: 8,
                Media: 8,
                Faltas: 3
            }
        ]

    }

    lerDadosExtras() {
        this.arrayNotas = [
            {
                id: 1,
                disciplina: 'Clube da Música',
                Faltas: 2

            },
            {
                id: 2,
                disciplina: 'Natação',
                Faltas: 1
            },
            {
                id: 3,
                disciplina: 'Judô',
                Faltas: 3
            }
        ]

    }

    deletar(id) {

        if (confirm('Deseja realmente deletar essa inscrição ' + id + '?')) {
            let tbody = document.getElementById('tbody');
            console.log(id);

            for (let i = 0; i < this.arrayDisciplinas.length; i++) {
                if (this.arrayDisciplinas[i].id == id) {
                    this.arrayDisciplinas.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }

    total() {
        let somaTotal = 0;
        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            somaTotal = this.arrayDisciplinas[i].soma + somaTotal;
        }
        console.log(somaTotal);

        alert("O valor total das disciplinas extras ficou de: R$ " + somaTotal + ",00 reais")
    }
}





var disciplinaAprovar = new AprovarDisciplina;
var consultaNotas = new ConsultarNotas;

class enviarMensagem {

    constructor() {
        this.arrayMsg = [];
        this.id = 0;
    }

    interacaoChat() {
        let chat = this.lerDados();

        this.adicionar(chat);

        this.listaTabela();

        console.log(this.arrayMsg);
    }

    lerDados() {
        let msg = {};

        msg.message = document.getElementById('mensagemusuario').value;

        return msg;
    }

    adicionar(chat) {
        this.arrayMsg.push(chat);
        this.id++;
    }

    listaTabela() {
        let tbody = document.getElementById('tbodychat');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayMsg.length; i++) {
            let tr = tbody.insertRow();

            let td_message = tr.insertCell();

            td_message.classList.add('tableAlignUsuario');

            td_message.innerText = this.arrayMsg[i].message;

            document.getElementById('mensagemusuario').value = '';

            if (i == "0") {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Olá, no que podemos ajudar?";
                }, 1500);


            } else if (i == "1") {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Para consultar as mensalidades pendentes acesse a barra de navegação (Financeiro). Podemos auxiliar em mais alguma coisa?";
                }, 1500);

            } else if (i == "2") {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Para falar com os professores ligue para (41) 89909-9909.";
                }, 1500);
            } else {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Atendimento Encerrado!";
                }, 1500);

                // setTimeout(function () {
                //     if (confirm('Deseja limpar a conversa?')) {
                //         let tbodychat = document.getElementById('tbodychat');

                //         for (let i = 0; i < this.arrayMsg.length; i++) {
                //             this.arrayMsg.splice(i, 1);
                //             tbodychat.deleteRow(i);
                //         }
                //     }
                // }, 2000);
            }
        }

    }
}

var chat = new enviarMensagem;