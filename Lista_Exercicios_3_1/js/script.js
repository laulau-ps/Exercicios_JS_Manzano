let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"))

let conversao = (9 * celsius + 160) / 5

document.getElementById('demo').innerText = celsius + "ºC = " + conversao + "ºF"