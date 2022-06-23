class ConsultarDisciplina {

    constructor() {
        this.id = 1;
        this.status = "Aguardando Aprovação";
        this.arrayDisciplinas = [];
    }

    consultarSolicitacao() {
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
            let td_categoria = tr.insertCell();
            let td_status = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();


            td_id.innerText = this.arrayDisciplinas[i].id;
            td_disciplina.innerText = this.arrayDisciplinas[i].disciplina;
            td_valor.innerText = this.arrayDisciplinas[i].valor;
            td_status.innerText = this.arrayDisciplinas[i].status;
            td_categoria.innerText = this.arrayDisciplinas[i].categoria;

            td_id.classList.add('col-1');
            td_disciplina.classList.add('col-3');
            td_categoria.classList.add('col-2')
            td_status.classList.add('col-2');
            td_valor.classList.add('col-2');
            td_acoes.classList.add('col-2');

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            imgDelete.classList.add('tableacoesimg');
            imgDelete.setAttribute("onclick", "disciplinaConsultar.deletar(" + this.arrayDisciplinas[i].id + ")");

            td_acoes.appendChild(imgDelete);
        }
    }

    lerDados() {
        this.arrayDisciplinas = [
            {
                id: 1,
                disciplina: 'Clube da Música',
                status: 'Aprovado',
                valor: "R$ 250,00 reais",
                categoria: "extra",
                soma: 250
            },
            {
                id: 2,
                disciplina: 'Judô',
                status: 'Aprovado',
                valor: "R$ 350,00 reais",
                categoria: "extra",
                soma: 350
            },
            {
                id: 3,
                disciplina: 'Natação',
                status: 'Aprovado',
                valor: "R$ 100,00 reais",
                categoria: "extra",
                soma: 100
            },
            {
                id: 4,
                disciplina: 'Português',
                status: 'Aprovado',
                valor: "Plano Mensal",
                categoria: "obrigatória",
                soma: 0
            },
            {
                id: 5,
                disciplina: 'Matemática',
                status: 'Aprovado',
                valor: "Plano Mensal",
                categoria: "obrigatória",
                soma: 0
            },
            {
                id: 6,
                disciplina: 'Ciências',
                status: 'Aprovado',
                valor: "Plano Mensal",
                categoria: "obrigatória",
                soma: 0
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
        let mensal = 1000;
        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            somaTotal = this.arrayDisciplinas[i].soma + somaTotal;
        }
        console.log(somaTotal);

        alert("O valor total das disciplinas extras ficou de: R$ " + somaTotal + ",00 reais\nO plano mensal segue R$ " + mensal + ",00 reais\nTotalizando: RS " + (mensal + somaTotal) + ",00 reais")

        var doc = new jsPDF()
        doc.text(20, 20, 'Escola Pedra Filosofal')
        doc.setFontSize(16)
        doc.text(20, 30, 'Boleto para pagamento da mensalidade referente ao mês 06/22')
        doc.text(20, 40, 'O valor total da mensalidade é de R$ ' + (mensal + somaTotal) + ',00 reais.')
        doc.text(20, 50, 'Para pagamento utilize o código de barras abaixo: ')
        
        doc.setLineWidth(0.1)
        doc.line(100, 70, 100, 60)
        doc.setLineWidth(0.5)
        doc.line(102, 70, 102, 60)
        doc.setLineWidth(1)
        doc.line(104, 70, 104, 60)
        doc.setLineWidth(1.5)
        doc.line(107, 70, 107, 60)
        doc.setLineWidth(1)
        doc.line(109, 70, 109, 60)
        doc.setLineWidth(0.5)
        doc.line(111, 70, 111, 60)
        doc.setLineWidth(0.1)
        doc.line(112, 70, 112, 60)

        doc.setLineWidth(0.1)
        doc.line(113, 70, 113, 60)
        doc.setLineWidth(0.5)
        doc.line(114, 70, 114, 60)
        doc.setLineWidth(1)
        doc.line(115, 70, 115, 60)
        doc.setLineWidth(1.5)
        doc.line(116, 70, 116, 60)
        doc.setLineWidth(1)
        doc.line(117, 70, 117, 60)
        doc.setLineWidth(0.5)
        doc.line(118, 70, 118, 60)
        doc.setLineWidth(0.1)
        doc.line(119, 70, 119, 60)

        doc.setLineWidth(0.1)
        doc.line(121, 70, 121, 60)
        doc.setLineWidth(0.5)
        doc.line(123, 70, 123, 60)
        doc.setLineWidth(1)
        doc.line(125, 70, 125, 60)
        doc.setLineWidth(1.5)
        doc.line(126, 70, 126, 60)
        doc.setLineWidth(1)
        doc.line(128, 70, 128, 60)
        doc.setLineWidth(0.5)
        doc.line(129, 70, 129, 60)
        doc.setLineWidth(0.1)
        doc.line(131, 70, 131, 60)

        doc.setLineWidth(0.1)
        doc.line(134, 70, 134, 60)
        doc.setLineWidth(0.5)
        doc.line(135, 70, 135, 60)
        doc.setLineWidth(1)
        doc.line(137, 70, 137, 60)
        doc.setLineWidth(1.5)
        doc.line(138, 70, 138, 60)
        doc.setLineWidth(1)
        doc.line(140, 70, 140, 60)
        doc.setLineWidth(0.5)
        doc.line(141, 70, 141, 60)
        doc.setLineWidth(0.1)
        doc.line(142, 70, 142, 60)
        doc.save('Pedra Filosofal.pdf')
    }
}

var disciplinaConsultar = new ConsultarDisciplina;