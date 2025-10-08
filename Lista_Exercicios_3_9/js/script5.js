let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))

let valorApoio = valor1

valor1 = valor2
valor2 = valorApoio

document.getElementById('demo').innerText = "Valores invertidos: " + valor1 + ", " + valor2
