let valor = parseInt(prompt("Digite um número entre 1 e 9:"))

if (valor < 1 || valor > 9){
    document.getElementById('demo').innerText = "O número digitado está fora da faixa permitida"
} else {
    document.getElementById('demo').innerText = "O número digitado está na faixa permitida"
}