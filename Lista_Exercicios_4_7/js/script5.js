let a = parseInt(prompt("Digite o 1º valor:"))
let b = parseInt(prompt("Digite o 2º valor:"))
let c = parseInt(prompt("Digite o 3º valor:"))
let d = parseInt(prompt("Digite o 4º valor:"))

if (a % 2 == 0 && a % 3 == 0) {
    document.getElementById('demo').innerText += a + "\n"
}
if (b % 2 == 0 && b % 3 == 0) {
    document.getElementById('demo').innerText += b + "\n"
}
if (c % 2 == 0 && c % 3 == 0) {
    document.getElementById('demo').innerText += c + "\n"
}
if (d % 2 == 0 && d % 3 == 0) {
    document.getElementById('demo').innerText += d + "\n"
}

