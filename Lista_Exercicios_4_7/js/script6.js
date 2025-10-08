let valor1 = parseInt(prompt("Digite o 1º valor:"))
let valor2 = parseInt(prompt("Digite o 2º valor:"))
let valor3 = parseInt(prompt("Digite o 3º valor:"))
let valor4 = parseInt(prompt("Digite o 4º valor:"))
let valor5 = parseInt(prompt("Digite o 5º valor:"))

let maiorNumero = 0
let menorNumero = 0

if (valor1 > valor2 && valor1 > valor3 && valor1 > valor4 && valor1 > valor5) {
    maiorNumero = valor1
} else
    if (valor2 > valor1 && valor2 > valor3 && valor2 > valor4 && valor2 > valor5) {
        maiorNumero = valor2
    } else
        if (valor3 > valor1 && valor3 > valor2 && valor3 > valor4 && valor3 > valor5) {
            maiorNumero = valor3
        } else
            if (valor4 > valor1 && valor4 > valor2 && valor4 > valor3 && valor4 > valor5) {
                maiorNumero = valor4
            } else {
                maiorNumero = valor5
            }

if (valor1 < valor2 && valor1 < valor3 && valor1 < valor4 && valor1 < valor5) {
    menorNumero = valor1
} else
    if (valor2 < valor1 && valor2 < valor3 && valor2 < valor4 && valor2 < valor5) {
        menorNumero = valor2
    } else
        if (valor3 < valor1 && valor3 < valor2 && valor3 < valor4 && valor3 < valor5) {
            menorNumero = valor3
        } else
            if (valor4 < valor1 && valor4 < valor2 && valor4 < valor3 && valor4 < valor5) {
                menorNumero = valor4
            } else {
                menorNumero = valor5
            }

document.getElementById('demo').innerText = "Maior número: " + maiorNumero + "\n Menor número: " + menorNumero