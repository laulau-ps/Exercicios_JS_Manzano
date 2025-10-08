let a = parseInt(prompt("Digite o 1º valor:"))
let b = parseInt(prompt("Digite o 2º valor:"))
let c = parseInt(prompt("Digite o 3º valor:"))

let somaQuadrados = (a * a) + (b * b) + (c * c)

document.getElementById('demo').innerText = "A soma dos quadrados de " + a + ", " + b + " e " + c + " = " + somaQuadrados