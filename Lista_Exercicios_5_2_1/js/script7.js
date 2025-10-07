let areaTotal = 0

do {
    let nome = prompt("Digite o nome do cômodo:")
    let largura = parseFloat(prompt("Digite a largura do cômodo:"))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))
    let area = largura * comprimento
    alert("A área é igual a: " + area)

    areaTotal = areaTotal + area

    pergunta = prompt("Deseja calcular a área de um novo cômodo (S/N)?")
} while (pergunta != "N" && pergunta != "n")

document.getElementById('demo').innerText = "A área total da residência é: " + areaTotal + "m²"