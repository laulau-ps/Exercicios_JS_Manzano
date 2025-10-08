let a = parseInt(prompt("Digite o 1º valor:"))
let b = parseInt(prompt("Digite o 2º valor:"))
let c = parseInt(prompt("Digite o 3º valor:"))
let d = parseInt(prompt("Digite o 4º valor:"))

let somaAB = a + b
let multAB = a * b

let somaAC = a + c
let multiAC = a * c

let somaAD = a + d
let multiAD = a * d

let somaBC = b * c
let multiBC = b * c

let somaBD = b + d
let multiBD = b * d

let somaCD = c + d
let multiCD = c * d

document.getElementById('demo').innerText = "Somas: " + somaAB + ", " + somaAC + ", " + somaAD + ", " + somaBC + ", " + somaBD + ", " + somaCD + "\n Multiplicações: " + multAB + ", " + multiAC + ", " + multiAD + ", " + multiBC + ", " + multiBD + ", " + multiCD