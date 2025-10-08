let comprimento = parseFloat(prompt("Digite o comprimento da caixa:"))
let largura = parseFloat(prompt("Digite a largura da caixa:"))
let altura = parseFloat(prompt("Digite a altura da caixa:"))

let volume = comprimento * largura * altura

document.getElementById('demo').innerText = "O volume dessa caixa é: " + volume