let a = parseInt(prompt("Digite o 1º valor:"))
let b = parseInt(prompt("Digite o 2º valor:"))
let c = parseInt(prompt("Digite o 3º valor:"))

let quadradoSoma = (a + b + c) * (a + b + c)

document.getElementById('demo').innerText = "O quadrado das somas de: " + a + ", " + b + " e " + c + " = " + quadradoSoma