let nota1 = parseInt(prompt("Digite a 1ª nota:"))
let nota2 = parseInt(prompt("Digite a 2ª nota:"))
let nota3 = parseInt(prompt("Digite a 3ª nota:"))
let nota4 = parseInt(prompt("Digite a 4ª nota:"))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7.0) {
    document.getElementById('demo').innerText = "Sua média foi de: " + media + ". Você está aprovado."
} else {
    let notaExame = parseInt(prompt("Informe a nota do exame:"))
    let novaMedia = (media + notaExame) / 2
    if (novaMedia >= 5.0) {
        document.getElementById('demo').innerText = "Sua média foi de: " + media + ". Você está aprovado."
    } else {
        document.getElementById('demo').innerText = "Sua média foi de: " + media + ". Você está reprovado."
    }
}
