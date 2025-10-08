let valor = parseInt(prompt("Digite um número inteiro:"))

if (valor % 2 == 0){
    document.getElementById('demo').innerText = "Par"
} else {
    document.getElementById('demo').innerText = "Ímpar"
}