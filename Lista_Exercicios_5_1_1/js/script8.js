let contadora = 0
let numero = 0
let soma = 0
let media = 0

while (contadora < 10) {
    numero = parseInt(prompt("Digite um número:"))
    soma += numero
    contadora++
}

media = soma / contadora
document.getElementById('demo').innerText = "Soma: " + soma + ". Média: " + media