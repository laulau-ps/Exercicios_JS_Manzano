let contadora = 1
let fatorial = 0
let soma = 0

do {
    let numero = parseInt(prompt("Digite um número inteiro maior que 1:"))

    if (numero < 2) {
        alert("Fatorial inexistente")
    } else {
        fatorial = 1
        while (numero > 1) {
            fatorial = fatorial * numero
            numero = numero - 1

        }
    }
    soma += fatorial

    contadora++
} while (contadora < 16)

document.getElementById('demo').innerText = soma
