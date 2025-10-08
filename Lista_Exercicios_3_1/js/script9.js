let dolar = parseFloat(prompt("Informe o valor em dólares:"))
let cotacao = parseFloat(prompt("Informe a cotação do dolár:"))

let conversao = dolar * cotacao

document.getElementById('demo').innerText = dolar + "US$ = R$" + conversao