let contadora = 0
let soma = 0
let numero = 0

alert("O programa só finaliza ao inserir um número negativo.")

do {
    numero = parseInt(prompt("Digite um número: "))
    if (numero > 0) {
        soma += numero
        contadora++
    }
} while (numero > 0)

media = soma / contadora
document.getElementById('demo').innerText = "Soma: " + soma + "\n Média: " + media + "\n Total de números positivos enviados: " + contadora
