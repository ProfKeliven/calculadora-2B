//funcao pra adicionar os numeros no display
function addNumero(caractere){
    document.getElementById('display').value += caractere
}

//funcao pra limpar display quando clicar no botao C
function limparDisplay(){
    document.getElementById('display').value = ''
}

//apagar o ultimo caractere digitado
function apagar(){
    let display = document.getElementById('display').value
    document.getElementById('display').value = display.slice(0,-1)
}

//funcao para os operadores
function operador(op){
    if(numero !== ''){
        operadorAtual = op
        document.getElementById('display').value = ''
    }
}