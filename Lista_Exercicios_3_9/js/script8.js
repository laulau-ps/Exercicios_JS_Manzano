let a = parseInt(prompt("Digite o 1º valor:"))
let b = parseInt(prompt("Digite o 2º valor:"))

let quadrado = (a - b) * (a - b)

document.getElementById('demo').innerText = a + " - " + b + " = " + (a - b) + "\n " + (a - b) + "² = " + quadrado
