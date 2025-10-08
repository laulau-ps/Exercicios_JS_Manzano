let salarioAtual = parseFloat(prompt("Digite seu salário mensal:"))
let percentualReajuste = parseInt(prompt("Digite o percentual de reajuste:"))

let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100) 

document.getElementById('demo').innerText = "Seu novo salário é: R$" + novoSalario