let valor = parseInt(prompt("Digite um número (positivo ou negativo):"))

if (valor >= 0) {
    document.getElementById('demo').innerText = valor
} else {
    document.getElementById('demo').innerText = valor * (-1)
}