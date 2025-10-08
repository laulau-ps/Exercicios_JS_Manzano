let valor = parseFloat(prompt("Digite o valor da prestação:"))
let taxa = parseFloat(prompt("Digite o percentual da taxa de atraso:"))
let tempo = parseInt(prompt("Digite a quantos dias está atrasado:")) 

let valorFinal = valor + (valor * taxa/100) * tempo

document.getElementById('demo').innerText = "Valor com juros: R$" + valorFinal