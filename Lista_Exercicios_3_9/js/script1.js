let fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"))

let conversao = (fahrenheit - 32) * (5/9)

document.getElementById('demo').innerText = fahrenheit + "ºF = " + conversao + "ºC"