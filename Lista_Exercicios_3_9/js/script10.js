let real = parseFloat(prompt("Informe o valor em reais:"))
let cotacao = parseFloat(prompt("Informe a cotação do dolár:"))

let conversao = real / cotacao

document.getElementById('demo').innerText = "R$" + real + " = US$" + conversao