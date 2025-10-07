let calculo = 0
let areaTotal = 0
let nome = 0
let largura = 0
let comprimento = 0
let pergunta = ""

while (pergunta == "S" || pergunta == "s" || pergunta == "") {
    nome = prompt("Digite o nome do cômodo:")
    largura = parseFloat(prompt("Digite a largura desse cômodo:"))
    comprimento = parseFloat(prompt("Digite o comprimento desse cômodo:"))
    pergunta = prompt("Deseja adicionar outro cômodo? S/N")
    calculo = largura * comprimento
    areaTotal += calculo
}

document.getElementById('demo').innerText = "A área total é de: " + areaTotal + "m²"







