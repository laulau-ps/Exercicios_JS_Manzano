let validador = 1
let maiorNumero = 0
let menorNumero = 0
let numero = 0

while (numero >= 0) {
    numero = parseInt(prompt("Digite um número:"))

    if (numero >= 0) {
        if (validador == 1) {
            maiorNumero = numero
            menorNumero = numero
            validador = 0
        } else {
            if (numero > maiorNumero) {
                maiorNumero = numero
            }
            if (numero < menorNumero) {
                menorNumero = numero
            }
        }
    }
}

document.getElementById('demo').innerText = "Menor número informado: " + menorNumero + "\n Maior número informado: " + maiorNumero