alert("Esse programa só para ao digitar um número negativo.")
let numero = parseInt(prompt("Digite um número:"))

let numGuia = 1
let maiorNumero = 0
let menorNumero = 0

do {
    numero = parseInt(prompt("Digite um número:"))
    if (numero >= 0) {
        if (numGuia == 1) {
            maiorNumero = numero
            menorNumero = numero
            numGuia = 0
        } else
            if (numero > maiorNumero) {
                maiorNumero = numero
            }
        if (numero < menorNumero) {
            menorNumero = numero
        }
    }
} while (numero >= 0)
document.getElementById('demo').innerText = "Menor número digitado: " + menorNumero + "\n Maior número digitado: " + maiorNumero