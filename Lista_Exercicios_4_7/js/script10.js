let nome = prompt("Digite seu nome:")
let sexo = prompt("Informe seu sexo (F/M):")

if (sexo == "M" || sexo == "m") {
    document.getElementById('demo').innerText = "Olá Sr." + nome
} else {
    document.getElementById('demo').innerText = "Olá Sra." + nome
}