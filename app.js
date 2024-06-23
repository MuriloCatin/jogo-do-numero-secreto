let titulo = document.querySelector('h1') ;
titulo.innerHTML = 'Hora do Desafio' ;

function botaoConsole () {
    console.log ('o botão foi clicado')
}

function exibirAlerta() {
    alert ('Eu amo Js')
}

function exibirPrompt() {
    let nomeDaCidade = prompt ('Digite o nome da sua cidade') 
    alert (`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro numero'));
    let segundoNumero = parseInt(prompt('Digite o segundo numero'));
    let resultado = primeiroNumero + segundoNumero ;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}