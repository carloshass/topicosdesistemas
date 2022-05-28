function validacao() {
    var matricula = document.getElementsByName('usernumber')[0].value;
    var senha = document.getElementsByName('password')[0].value;

    if (matricula == "12345" && senha == "12345") {
        window.open('index.html');
        
    } else {
        alert("Matrícula ou senha errado!")
    }
}