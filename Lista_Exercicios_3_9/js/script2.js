let raio = parseFloat(prompt("Digite o raio da lata:"))
let altura = parseFloat(prompt("Digite a altura da lata:"))

let volume = Math.PI * raio ** 2 * altura

document.getElementById('demo').innerText = "O volume dessa lata é: " + volume.toFixed(2)