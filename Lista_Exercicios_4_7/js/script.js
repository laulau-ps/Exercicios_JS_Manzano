let valor1 = parseInt(prompt("Digite o 1º valor:"))
let valor2 = parseInt(prompt("Digite o 2º valor:"))

let diferenca = 0

if (valor1 > valor2){
    diferenca = valor1 - valor2
} else {
    diferenca = valor2 - valor1
}

document.getElementById("demo").innerText = diferenca